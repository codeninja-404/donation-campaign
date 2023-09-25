

const DonationCard = () => {
    return (
        <div>
            <div className="rounded-lg card lg:card-side bg-red-100 shadow-xl">
        <div className="lg:w-2/5">
        <img className="h-full rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg"
          src="https://i.ibb.co/J5gcknW/photo-2023-09-26-00-21-10.jpg"
          alt="Album"
        />
        </div>

        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DonationCard;