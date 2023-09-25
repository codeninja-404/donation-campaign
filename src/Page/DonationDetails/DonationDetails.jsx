import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const details = useLoaderData();
  useEffect(() => {
    const findDetail = details?.find((detail) => detail.id == id);

    setDetail(findDetail);
  }, [id, details]);
  return (
    <div className="pt-40 container mx-auto px-2 lg:max-w-[1280px]">
      <DonationDetailsCard detail={detail}></DonationDetailsCard>
    </div>
  );
};

export default DonationDetails;
