import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="text-center mt-28">
      <p className="text-6xl text-red-500 ">404 </p>
      <h2 className="text-5xl ">Not Found Page</h2>
      <button onClick={handleHome} className="btn  btn-outline my-9">
        GO HOME
      </button>
    </div>
  );
};

export default ErrorPage;
