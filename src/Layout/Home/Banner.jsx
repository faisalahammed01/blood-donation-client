import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/K2HfhjL/Picsart-25-01-14-00-43-03-934-1.jpg)",
        }}
      >
        <div className=" text-center">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold mr-24">
              <span className="text-white">Blood</span>{" "}
              <span className="text-[#A72316]">Donation</span>
            </h1>
            <p className="mb-5 ml-36 text-[#A72316]">
              Save lives, spread hope—donate blood today
            </p>
          </div>
        </div>
      </div>
      <Link
        to="singUp"
        className="absolute bottom-44 right-56 btn text-white bg-red-700 pr-20 pl-20 hover:bg-red-900"
      >
        Join as a donor
      </Link>
      <Link
        to="/search"
        className="absolute bottom-24 right-56 btn  text-white bg-red-700 pr-20 pl-20 hover:bg-red-900"
      >
        Search Donors
      </Link>
    </section>
  );
};

export default Banner;
