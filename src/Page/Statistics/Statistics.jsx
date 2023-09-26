import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

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

  const globalTotal = datas.reduce(
    (preValue, curItem) => preValue + curItem.price,
    0
  );

  const data = [
    { name: "Group A", value: globalTotal - myTotalDonation },
    { name: "Group B", value: myTotalDonation },
  ];
  const COLORS = ["#FF5733", "#34d399"];
  return (
    <div className="pt-40  container mx-auto px-2 lg:max-w-[1280px]">
      <div className="flex justify-center">
        <div className="pb-10 md:pb-20">
          <PieChart width={200} height={200}>
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
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-col md:flex-row md:gap-10 justify-center">
          <div className="flex gap-10 items-center justify-center ">
            <p className="text-lg">Your Donation</p>
            <div className="bg-[#34d399] h-3 w-24"></div>
          </div>
          <div className="flex gap-10 items-center justify-center">
            <p className="text-lg">Total Donation</p>
            <div className="bg-[#FF5733] h-3 w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
