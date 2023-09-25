const DonationCard = ({ detail }) => {
  const {
    picture,
    card_bg,
    color_text_button_bg,
    category_bg,
    category,
    title,
    price,
  } = detail;
  return (
    <div>
      <div className="rounded-lg card text-center lg:text-left lg:card-side  shadow-xl">
        <div className="lg:w-2/5">
          <img
            className="h-full rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
            src={picture}
            alt="Album"
          />
        </div>

        <div
          style={{
            background: card_bg,
            color: color_text_button_bg,
          }}
          className="card-body"
        >
          <div>
          <span
            style={{ background: category_bg }}
            className=" rounded-sm py-0.5 px-2 text-md "
          >
            {category}
          </span>
          </div>
          <h1 className="text-lg py-2 font-bold">{title}</h1>
          <p>${price}</p>
          <div className="card-actions  justify-center lg:justify-start ">
            <button
              style={{
                background: color_text_button_bg,
              }}
              className="px-4 py-2  rounded-md text-xl text-white "
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
