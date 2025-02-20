import { useLoaderData, useNavigate } from "react-router-dom";

const Seemore = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { title, content, image } = data;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="card w-full sm:w-96 bg-white shadow-lg rounded-2xl overflow-hidden">
        <figure>
          <img
            src={image}
            alt="Blood Donation"
            className="w-full h-52 object-cover"
          />
        </figure>
        <div className="card-body p-5">
          <h2 className="text-xl font-semibold text-red-600">{title}</h2>
          <p className="text-gray-700 mt-2">{content}</p>
          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seemore;
