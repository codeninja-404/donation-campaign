

const Banner = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: "url(https://i.ibb.co/2NQ2QZk/sdfasf.jpg)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-90 "></div>
      <div className="w-full ">
        <h1 className="text-center py-10 text-3xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
        <div className="input-group  justify-center">
          <input
            type="text"
            placeholder="Search…"
            className="  input w-5/12 input-bordered"
          />
          <button className="btn  bg-rose-500 text-white px-5 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
