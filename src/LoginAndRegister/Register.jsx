import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../Share/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const axiosPublic = useAxiosPublic();
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
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const imageRes = await axiosPublic.post(image_hosting_api, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (imageRes.data.success) {
      const imageUrl = imageRes.data.data.url;

      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: imageUrl,
        bloodGroup: data.Blood,
        district: selectedDistricts,
        upazila: selectedUpazila,
        status: "Active",
        role: "Donor",
      };

      const userCredential = await createUser(data.email, data.password);
      if (userCredential.user) {
        await updateUserProfile(data.name, imageUrl);

        const userRes = await axiosPublic.post("/users", userInfo);
        if (userRes.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      }
    }
  };

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <div className="lg:w-3/4 mx-auto relative">
      {/* Loading Spinner */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-opacity-50 bg-black flex justify-center items-center z-50">
          <div className="w-16 h-16 border-8 border-t-8 border-gray-200 rounded-full animate-spin border-t-red-500"></div>
        </div>
      )}

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
                {...register("name", { required: true })}
                type="text"
                name="name"
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
                {...register("email", { required: true })}
                type="email"
                name="email"
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
                {...register("image", { required: true })}
                type="file"
                name="image"
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
                {...register("Blood", { required: true })}
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
                {...register("District", { required: true })}
                className="select select-bordered"
                name="District"
                value={selectedDistricts}
                onChange={(e) => setSelectedDistricts(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select District
                </option>
                {districts.map((district) => (
                  <option key={district.id} value={district.name}>
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
                {...register("Upazila", { required: true })}
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
                  <option key={upazila.id} value={upazila.name}>
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
                name="password"
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
                name="ConfirmPassword"
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
            <button
              className="btn btn-outline text-white font-bold bg-red-800 hover:bg-red-950"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
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
