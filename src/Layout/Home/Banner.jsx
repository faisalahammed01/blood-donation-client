import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative hero  min-h-screen bg-white text-white overflow-hidden flex items-center justify-center px-4 md:px-12">
      {/* Floating Blood Drops */}
      <div className="absolute top-10 left-10 w-5 h-5 bg-red-600 rounded-full shadow-lg animate-float"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-red-500 rounded-full shadow-md animate-float2"></div>
      <div className="absolute bottom-16 left-1/4 w-6 h-6 bg-red-700 rounded-full shadow-lg animate-float3"></div>

      <div className="hero-content flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 ">
        {/* Right Side - Responsive 3D Image */}
        <div className="relative">
          <img
            src={banner}
            alt="Blood Donation"
            className="rounded-lg  w-full max-w-xs md:max-w-md lg:max-w-lg border-4 border-white transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Left Side - Responsive 3D Text & Button */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700">
              Donate Blood,
            </span>
            <br />
            <span className="text-red-500">Save Lives</span>
            <span className="absolute -top-2 -left-3 w-2 h-2 bg-red-500 rounded-full animate-bounce"></span>
          </h1>

          <p className="py-6 text-black md:text-lg leading-relaxed opacity-90">
            Your blood donation can make a difference. Join us in our mission to
            save lives and support those in need.
          </p>

          {/* 3D Blood Drip Button */}
          <Link
            to="singUp"
            className="relative px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 bg-gradient-to-r from-red-700 to-red-900 rounded-lg shadow-xl hover:shadow-red-500/50 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10">Become a Donor</span>

            {/* Blood Dripping Effect */}
            <span className="absolute -bottom-2 left-1/2 w-3 h-3 bg-red-600 rounded-full animate-drip"></span>
            <span className="absolute -bottom-4 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-drip2"></span>
            <span className="absolute -bottom-3 left-1/4 w-2 h-2 bg-red-700 rounded-full animate-drip3"></span>

            {/* Blood Glow Effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-10 rounded-lg blur-lg animate-pulse"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
