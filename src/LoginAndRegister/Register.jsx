import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <img
          className="size-36"
          src="https://i.ibb.co.com/2Yc4sXv/register-here-en-no-sign-260nw-160430507-webp-260-280-01-14-2025-04-01-PM-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name=""
                placeholder="user details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="Category"
                placeholder="e.g., pets, documents, gadgets"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Avatar</span>
              </label>
              <input
                type="file"
                name="Thumbnail"
                placeholder="Image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Blood Group</span>
              </label>
              <input
                type="text"
                name="Title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Upazila</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location where the item was lost or found"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* form four row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="Contact"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Confirm_password</span>
              </label>
              <input
                type="password"
                name="Contact"
                placeholder="Confirm_password"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-outline text-white font-bold bg-red-800 hover:bg-red-950">
              Register
            </button>
          </div>
          <p className="text-start mt-4">
            Have an account?
            <Link className="text-red-600" to="/login">
              Log in now!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
