import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/blog").then((res) => setBlogs(res.data));
  }, []);
  return (
    <div>
      <div className="flex justify-end items-center">
        <Link to="blogManagement" className="btn px-14  bg-red-800 text-white">
          Add Blog
        </Link>
      </div>
      <div className="divider"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {blogs.map((blog) => (
          <div className="card bg-base-100 w-96 shadow-sm border-2 border-red-950">
            <figure>
              <img src={blog.image} alt="img" />
            </figure>
            <div className="card-body">
              <p>{blog.title}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline py-4 hover:bg-red-100 text-red-600">
                  <FaTrash></FaTrash>
                </div>
                {blog.status === "draft" && (
                  <div className="badge py-4 badge-outline hover:bg-red-100">
                    Publish
                  </div>
                )}
                {blog.status === "published" && (
                  <div className="badge py-4 badge-outline hover:bg-red-100">
                    Unpublish
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogs;
