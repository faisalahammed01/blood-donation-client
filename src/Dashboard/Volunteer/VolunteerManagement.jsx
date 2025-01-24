import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const VolunteerManagement = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://blood-donation-server-eta-eight.vercel.app/blogs")
      .then((res) => setBlogs(res.data));
  }, []);
  return (
    <div>
      <div className="flex justify-end items-center  p-4">
        <Link to="blogManagements" className="btn px-14  bg-red-800 text-white">
          Add Blog
        </Link>
      </div>
      <div className="divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="card bg-base-100 w-96 shadow-sm border-2 border-red-950"
          >
            <figure>
              <img src={blog.image} alt="img" />
            </figure>
            <div className="card-body">
              <p>{blog.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerManagement;
