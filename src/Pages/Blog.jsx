import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/AllBlog").then((res) => {
      const publishedBlogs = res.data.filter(
        (blog) => blog.status === "published"
      );
      setBlogs(publishedBlogs);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
            <p>
              {blog.content.length > 100
                ? blog.content.slice(0, 100) + "..."
                : blog.content}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/seeMore/${blog._id}`} className="btn btn-link">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
