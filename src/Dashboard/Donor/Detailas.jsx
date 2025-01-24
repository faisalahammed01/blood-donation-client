import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Detailas = () => {
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
  const handleModalOpen = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const handleModalClose = () => {
    document.getElementById("my_modal_1").close();
  };
  //   ------------------------------------------------------------------------------
  useEffect(() => {
    if (!_id) return;

    const updatedData = { status: "inprogress" };

    axios
      .put(
        `https://blood-donation-server-eta-eight.vercel.app/DonationUpStatus/${_id}`,
        updatedData
      )
      .then((res) => {});
  }, [_id]);
  //   ---------------------------------------------------------------------------------
  const [isConfirm, setConfirm] = useState(false);
  const onSubmit = (data) => {
    if (isConfirm) return;
    setConfirm(true);
    data.status = "pending";
    axios
      .post("https://blood-donation-server-eta-eight.vercel.app/donor", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          toast.success(
            "Your blood donation request has been successfully submitted! Thank you for your generosity."
          );
        }
      });
  };
  return (
    <div className="card bg-base-100 max-w-[760px] shadow-xl mx-auto">
      <div className="card-body items-center text-center">
        <p>Recipient Name-{recipientName}</p>
        <p>Blood Group-{Blood}</p>
        <p>Address {address} </p>
        <p>Hospital Name-{hospitalName} </p>
        <p>Date-{date}</p>
        <p>Time-{time}</p>
        <p>District-{District}</p>
        <p>Upazila-{Upazila}</p>
        <p>Message-{message}</p>
        <div className="card-actions">
          {/* open-btn */}
          <button
            className="btn btn-error text-white"
            onClick={handleModalOpen}
          >
            Donate
          </button>
          {/* stacture */}
          <dialog id="my_modal_1" className="modal">
            <form onSubmit={handleSubmit(onSubmit)} className="modal-box">
              {/*------------------- input------------------------------------ */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-800">Donor Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  readOnly
                  value={user?.displayName}
                  placeholder="Enter recovered location"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-800">Donor Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  value={user?.email}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-red-800">
                    Donor Contact Number
                  </span>
                </label>
                <input
                  {...register("number", { required: true })}
                  {...register("number", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^[0-9]{11}$/,
                      message: "Contact number must be exactly 11 digits",
                    },
                  })}
                  required
                  type="text"
                  name="number"
                  placeholder="Donor Contact Number"
                  className="input input-bordered"
                />
                {errors.number && (
                  <p className="text-red-600 mt-2">{errors.number.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipient Name</span>
                </label>
                <input
                  {...register("RecipientName", { required: true })}
                  type="text"
                  name="RecipientName"
                  defaultValue={recipientName}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Recipient Location</span>
                </label>
                <input
                  {...register("recipientLocation", { required: true })}
                  type="text"
                  name="recipientLocation"
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
                  name="HospitalName"
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
                  name="Blood"
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
                  name="date"
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
                  name="ematimeil"
                  value={time}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <input
                  {...register("District", { required: true })}
                  type="text"
                  name="District"
                  value={District}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upazila</span>
                </label>
                <input
                  {...register("Upazila", { required: true })}
                  type="text"
                  name="Upazila"
                  value={Upazila}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Additional Notes </span>
                </label>
                <input
                  {...register("Notes")}
                  type="text"
                  name="Notes"
                  placeholder="---Optional---"
                  className="input input-bordered"
                />
              </div>

              <div className="modal-action mt-4 justify-between">
                <button
                  type="submit"
                  disabled={isConfirm}
                  className="btn btn-neutral ml-40"
                >
                  {isConfirm ? "Processing..." : "Confirm"}
                </button>
                <button
                  type="button"
                  className="btn btn-circle "
                  onClick={handleModalClose}
                >
                  ❌
                </button>
              </div>
            </form>
            <ToastContainer />
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Detailas;
