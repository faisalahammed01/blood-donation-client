import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const {
    Blood,
    address,
    date,
    time,
    _id,
    message,
    Upazila,
    District,
    recipientName,
    hospitalName,
  } = data;

  useEffect(() => {
    if (!_id) return;
    axios.put(`http://localhost:5000/DonationUpStatus/${_id}`, {
      status: "inprogress",
    });
  }, [_id]);

  const [isConfirm, setConfirm] = useState(false);

  const onSubmit = (formData) => {
    if (isConfirm) return;
    setConfirm(true);
    formData.status = "pending";

    axios.post("http://localhost:5000/donor", formData).then((res) => {
      if (res.data.insertedId) {
        reset();
        toast.success(
          "Your blood donation request has been successfully submitted! Thank you for your generosity."
        );
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ToastContainer />
      <div className="card bg-base-100 shadow-xl p-6">
        <h2 className="text-xl font-bold text-center mb-4">
          Recipient Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>
            <strong>Recipient Name:</strong> {recipientName}
          </p>
          <p>
            <strong>Blood Group:</strong> {Blood}
          </p>
          <p>
            <strong>Hospital Name:</strong> {hospitalName}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>District:</strong> {District}
          </p>
          <p>
            <strong>Upazila:</strong> {Upazila}
          </p>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
          <p>
            <strong>Message:</strong> {message}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-neutral bg-black glass text-white"
            onClick={() =>
              document.getElementById("donation_modal").showModal()
            }
          >
            Donate
          </button>
        </div>
      </div>

      {/* Modal Section */}
      <dialog id="donation_modal" className="modal">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
          <h2 className="text-lg font-bold text-center mb-4">
            Donor Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-800">Donor Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                value={user?.displayName}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-red-800">Donor Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                value={user?.email}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text text-red-800">
                  Donor Contact Number
                </span>
              </label>
              <input
                {...register("number", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Contact number must be exactly 11 digits",
                  },
                })}
                type="text"
                placeholder="Enter contact number"
                className="input input-bordered"
              />
              {errors.number && (
                <p className="text-red-600">{errors.number.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipient Name</span>
              </label>
              <input
                {...register("RecipientName", { required: true })}
                type="text"
                value={recipientName}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipient Location</span>
              </label>
              <input
                {...register("recipientLocation", { required: true })}
                type="text"
                value={address}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Hospital Name</span>
              </label>
              <input
                {...register("HospitalName", { required: true })}
                type="text"
                value={hospitalName}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Blood Group</span>
              </label>
              <input
                {...register("Blood", { required: true })}
                type="text"
                value={Blood}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                value={date}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                {...register("time", { required: true })}
                type="time"
                value={time}
                readOnly
                className="input input-bordered"
              />
            </div>

            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Additional Notes</span>
              </label>
              <input
                {...register("Notes")}
                type="text"
                placeholder="---Optional---"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="modal-action flex justify-between mt-4">
            <button
              type="submit"
              disabled={isConfirm}
              className="btn btn-neutral bg-black glass text-white mx-auto"
            >
              {isConfirm ? "Processing..." : "Confirm"}
            </button>
            <button
              type="button"
              className="btn btn-circle"
              onClick={() => document.getElementById("donation_modal").close()}
            >
              ❌
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Details;
