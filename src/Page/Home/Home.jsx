import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const datas = useLoaderData();
  
  return (
    <div className="">
      <Banner></Banner>
      <div className="my-20 container mx-auto px-2 lg:max-w-[1280px]">
        <Cards datas={datas}></Cards>
      </div>
    </div>
  );
};

export default Home;
