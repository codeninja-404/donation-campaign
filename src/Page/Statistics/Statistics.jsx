import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const datas = useLoaderData();
  const [myTotalDonation, setMyTotalDonation] = useState(0);
  const itemDonated = JSON.parse(localStorage.getItem("donated"));
  useEffect(() => {
    if (itemDonated == null) {
      setMyTotalDonation(0);
    } else {
      const myTotalDonation = itemDonated.reduce(
        (preValue, curItem) => preValue + curItem.price,
        0
      );

      setMyTotalDonation(myTotalDonation);
    }
  }, [itemDonated]);
  console.log(myTotalDonation);

  const globalTotal = datas.reduce(
    (preValue, curItem) => preValue + curItem.price,
    0
  );
  console.log(globalTotal);

  const data = [
    { name: "Group A", value: globalTotal - myTotalDonation },
    { name: "Group B", value: myTotalDonation },
  ];
  const COLORS = ["#FF5733", "#34d399"];
  return (
    <div className="pt-40  container mx-auto px-2 lg:max-w-[1280px]">
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={600} height={600}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className=" ">
        <div className="md:flex gap-10 justify-center">
        <div className="flex gap-10 items-center ">
            <p className="text-lg">Your Donation</p>
            <div className="bg-[#34d399] h-3 w-24"></div>
        </div>
        <div className="flex gap-10 items-center">
            <p className="text-lg">Total Donation</p>
            <div className="bg-[#FF5733] h-3 w-24"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
