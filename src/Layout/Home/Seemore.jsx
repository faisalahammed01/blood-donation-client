import { useLoaderData } from "react-router-dom";

const Seemore = () => {
  const data = useLoaderData();
  const { title, content, image } = data;
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 ">
        <figure>
          <img src={image} alt="img" />
        </figure>
        <div className="card-body">
          <p>{title}</p>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Seemore;
