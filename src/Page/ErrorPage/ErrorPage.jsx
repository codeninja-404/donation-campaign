import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="h-[70vh] w-7/12 mx-auto flex flex-col justify-center items-center ">
      <h1 className="text-8xl font-extrabold text-[#1A2238] tracking-widest">404</h1>
      <div className=" px-4 text-xl font-bold rounded   text-red-500  ">
        Page Not Found
      </div>
      <button className="mt-5 btn bg-[#1A2238]">
        <a className="relative inline-block text-sm font-medium ">
          <span className=""></span>

          <span className="text-white">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default ErrorPage;
