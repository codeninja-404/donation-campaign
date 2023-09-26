import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner";
import Cards from "../../components/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const all = useLoaderData();
  const [datas, setDatas] = useState(all);
  const [search, setSearch] = useState(false);
  const handleSearch = (category) => {
    event.preventDefault();
    !search;
    const searchCategory = all.filter(
      (data) => data.category.toLowerCase() == category.toLowerCase()
    );
    if (searchCategory.length > 0) {
      setSearch(true);
      setDatas(searchCategory);
    } else {
      setSearch(false);
      setDatas(all);
    }
    // console.log(searchCategory);
    // console.log(category);
  };

  return (
    <div className="">
      <Banner handleSearch={handleSearch}></Banner>
      <div className="my-20 container mx-auto px-2 lg:max-w-[1280px]">
        {search ? <Cards datas={datas}></Cards> : <Cards datas={datas}></Cards>}
      </div>
    </div>
  );
};

export default Home;
