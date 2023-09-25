import Card from "../Card/Card";

const Cards = ({ datas }) => {
   
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {datas.map((data) => (
        <Card key={data.id} data={data}></Card>
      ))}
    </div>
  );
};

export default Cards;
