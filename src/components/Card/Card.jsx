import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    picture,
    id,
    card_bg,
    color_text_button_bg,
    title,
    category,
    category_bg,
  } = data;

  return (
    <Link to={`/details/${id}`}>
      <div
        style={{
          background: card_bg,
          color: color_text_button_bg,
        }}
        className="rounded-lg card h-full card-compact shadow-md "
      >
        <img className="rounded-t-lg" src={picture} alt="Category" />
        <div className=" p-4 pb-1 rounded-lg">
          <span
            style={{ background: category_bg }}
            className=" rounded-sm py-0.5 px-2 text-md "
          >
            {category}
          </span>
          <h1 className="text-lg py-2 font-bold">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
