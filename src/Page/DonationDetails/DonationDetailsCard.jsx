const DonationDetailsCard = ({ detail }) => {
  const { picture,title,description,color_text_button_bg,price } = detail;
  return (
    <div>
      <div className="grid grid-cols-10">
        <div
          className="hero h-[30vh] md:h-[50vh] rounded-xl row-span-full col-start-1 col-span-full "
          style={{ backgroundImage: `url(${detail.picture})` }}
        ></div>
        <div className=" bg-black  bg-opacity-50 row-span-full col-span-full col-end-11 self-end p-8 text-white rounded-b-lg">
          <button style={{background:color_text_button_bg}} className="px-5 py-3 rounded-md text-xl">Donate {price}</button>
        </div>
      </div>
      <div>
        <h1  className="text-4xl font-bold py-10">{title}</h1>
        <p className="pb-20">{description}</p>
      </div>
    </div>
  );
};

export default DonationDetailsCard;
