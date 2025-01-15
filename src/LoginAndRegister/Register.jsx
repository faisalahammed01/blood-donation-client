import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// import useAxiosPublic from "../Share/axiosPublic";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const { data: upazilas = [], isLoading } = useQuery({
    queryKey: ["Upazilas"],
    queryFn: async () => {
      const res = await axios.get("/upazilas.json");
      return res.data;
    },
  });
  const { data: districts = [] } = useQuery({
    queryKey: ["districts"],
    queryFn: async () => {
      const res = await axios.get("/districts.json");
      return res.data;
    },
  });
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
  };

  // const imageFile = { image: data.image[0] }
  // const res = await useAxiosPublic.post(image_hosting_api, imageFile, {
  //     headers: {
  //         'content-type': 'multipart/form-data'
  //     }
  // });

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

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
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* form first row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name=""
                placeholder="Name"
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
                placeholder="Email"
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
                placeholder="Avatar"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Blood Group</span>
              </label>
              <select
                defaultValue="default"
                name="Blood"
                required
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select Blood Group
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <select
                className="select select-bordered"
                name="Upazila"
                value={selectedDistricts}
                onChange={(e) => setSelectedDistricts(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select District
                </option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            {/*------------------------------//-------------------------------------------- */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Upazila</span>
              </label>
              <select
                className="select select-bordered"
                name="Upazila"
                value={selectedUpazila}
                onChange={(e) => setSelectedUpazila(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Upazila
                </option>
                {upazilas.map((upazila) => (
                  <option key={upazila.id} value={upazila.id}>
                    {upazila.name}
                  </option>
                ))}
              </select>
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
                {...register("password", { required: "Password is required" })}
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
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                required
              />
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-600 mt-2">
              {errors.confirmPassword.message}
            </p>
          )}
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
