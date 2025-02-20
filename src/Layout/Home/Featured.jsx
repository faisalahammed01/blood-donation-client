import {
  FaHandHoldingHeart,
  FaUsers,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6">
          Why Choose Our <span className="text-red-500">Blood Donation</span>{" "}
          Platform?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We provide a safe, trusted, and efficient way to donate blood. Be a
          hero and help save lives today!
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-red-200">
          <FaHandHoldingHeart className="text-red-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Life-Saving Impact</h3>
          <p className="text-sm text-gray-600 mt-2">
            Your donation directly helps patients in need and saves lives.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-red-200">
          <FaUsers className="text-red-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Trusted Community</h3>
          <p className="text-sm text-gray-600 mt-2">
            Join a growing network of dedicated donors and volunteers.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-red-200">
          <FaShieldAlt className="text-red-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Safe & Secure</h3>
          <p className="text-sm text-gray-600 mt-2">
            We ensure a secure and hygienic donation process.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-red-200">
          <FaGlobe className="text-red-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Global Reach</h3>
          <p className="text-sm text-gray-600 mt-2">
            Helping patients worldwide with a vast donor network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
