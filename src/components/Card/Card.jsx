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
    <div
      style={{
        background: card_bg,
        color: color_text_button_bg,
      }}
      className="card card-compact shadow-xl"
    >
      <img src={picture} alt="Category" />
      <div className=" p-4 pb-1">
        <span style={{ background: category_bg }} className="font-semibold rounded-md py-1 px-2 text-lg ">
          {category}
        </span>
        <h1 className="text-xl py-2 font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Card;
