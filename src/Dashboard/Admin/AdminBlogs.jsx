import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("https://blood-donation-server-eta-eight.vercel.app/blog")
      .then((res) => setBlogs(res.data));
  }, []);
  const handleBlogDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   ----------Delete from the database--------
        fetch(
          `https://blood-donation-server-eta-eight.vercel.app/blogs/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Request has been successfully deleted",
                icon: "success",
              });

              const remainingblogs = blogs.filter(
                (singleBlogs) => singleBlogs._id !== id
              );
              setBlogs(remainingblogs);
            }
          });
      }
    });
  };
  const handleStatusUp = (id, newStatus) => {
    if (!id) return;

    Swal.fire({
      title: `Are you sure you want to mark this as ${newStatus}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${newStatus}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://blood-donation-server-eta-eight.vercel.app/blogStatus/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: `The status has been changed to ${newStatus}`,
                icon: "success",
              });

              const updatedBlog = blogs.map((blog) =>
                blog._id === id ? { ...blog, status: newStatus } : blog
              );
              setBlogs(updatedBlog);
            }
          });
      }
    });
  };
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
          <div
            key={blog._id}
            className="card bg-base-100 w-96 shadow-sm border-2 border-red-950"
          >
            <figure>
              <img src={blog.image} alt="img" />
            </figure>
            <div className="card-body">
              <p>{blog.title}</p>
              <div className="card-actions justify-end">
                <div
                  onClick={() => handleBlogDelete(blog._id)}
                  className="badge badge-outline py-4 hover:bg-red-100 text-red-600"
                >
                  <FaTrash></FaTrash>
                </div>
                {blog.status === "draft" && (
                  <div
                    onClick={() => handleStatusUp(blog._id, "published")}
                    className="badge py-4 badge-outline hover:bg-red-100 font-bold"
                  >
                    Publish
                  </div>
                )}
                {blog.status === "published" && (
                  <div
                    onClick={() => handleStatusUp(blog._id, "draft")}
                    className="badge py-4 badge-outline hover:bg-red-100 font-bold"
                  >
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
