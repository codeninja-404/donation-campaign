import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetailsCard = ({ detail }) => {
  const { id, picture, title, description, color_text_button_bg, price } =
    detail || {};
  const handleDonate = () => {
    const addToDonation = [];
    const itemDonated = JSON.parse(localStorage.getItem("donated"));
    if (!itemDonated) {
      addToDonation.push(detail);
      localStorage.setItem("donated", JSON.stringify(addToDonation));
      toast("Donation Complete", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const alreadyAdded = itemDonated.find((detail) => detail.id === id);
      if (!alreadyAdded) {
        addToDonation.push(...itemDonated, detail);
        localStorage.setItem("donated", JSON.stringify(addToDonation));
        toast("Donation Complete", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast("Already donated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  return (
    <div>
      <div className="grid grid-cols-10">
        <div
          className="hero h-[30vh] md:h-[50vh] rounded-xl row-span-full col-start-1 col-span-full "
          style={{ backgroundImage: `url(${picture})` }}
        ></div>
        <div className=" bg-black  bg-opacity-50 row-span-full col-span-full col-end-11 self-end p-8 text-white rounded-b-lg">
          <button
            onClick={handleDonate}
            style={{ background: color_text_button_bg }}
            className="px-5 py-3 rounded-md text-xl"
          >
            Donate ${price}{" "}
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold py-10">{title}</h1>
        <p className="pb-20">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetailsCard;
