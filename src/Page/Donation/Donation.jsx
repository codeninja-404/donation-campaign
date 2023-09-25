import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [myTotalDonation, setMyTotalDonation] = useState(0);
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
    <div className="pt-40 grid gap-6 lg:grid-cols-2 container mx-auto px-2 lg:max-w-[1280px]">
      {donated.map((detail) => <DonationCard key={detail.id} detail={detail}></DonationCard>
      )}
    </div>
  );
};

export default Donation;
