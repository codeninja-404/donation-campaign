import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [myTotalDonation, setMyTotalDonation] = useState(0);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const itemDonated = JSON.parse(localStorage.getItem("donated"));
    if (itemDonated) {
      setDonated(itemDonated);
      const myTotalDonation = itemDonated.reduce(
        (preValue, curItem) => preValue + curItem.price,
        0
      );
      setMyTotalDonation(myTotalDonation);
    } else {
      return;
    }
  }, []);

  return (
    <div className="pt-40 pb-10 container mx-auto px-2 lg:max-w-[1280px]">
      <div className="grid gap-6 lg:grid-cols-2  ">
        {showAll
          ? donated.map((detail) => (
              <DonationCard key={detail.id} detail={detail}></DonationCard>
            ))
          : donated
              .slice(0, 4)
              .map((detail) => (
                <DonationCard key={detail.id} detail={detail}></DonationCard>
              ))}
      </div>
      <div className="text-center my-14">
        {donated.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className={`${showAll && "hidden"} px-4 py-2  rounded-md text-xl bg-green-800 text-white`}
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
