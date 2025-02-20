import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const [donners, setdonner] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedDistricts, setSelectedDistricts] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  // ------------------------- search donor-----------------
  const handleSearch = (data) => {
    setIsSubmitted(true);
    const { District, Upazila, Blood } = data;
    const query = `District=${District}&Upazila=${Upazila}&Blood=${Blood}`;
    axios.get(`http://localhost:5000/searchDonor?${query}`).then((res) => {
      setdonner(res.data);
    });
  };

  return (
    <>
      <h2 className="text-center font-bold text-4xl my-3 text-white dark:text-gray-200">
        🔎 Search <span className="text-red-500">Blood</span> Donors
      </h2>

      <div className="lg:w-3/4 mx-auto ">
        <div className="card bg-base-100  dark:bg-black w-full shrink-0 shadow-md">
          <form onSubmit={handleSubmit(handleSearch)} className="card-body">
            {/* form second row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    🩸Blood Group
                  </span>
                </label>
                <select
                  defaultValue="default"
                  {...register("Blood", { required: true })}
                  name="Blood"
                  required
                  className="select select-bordered w-full bg-white dark:bg-gray-700 text-black dark:text-white"
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
                  <span className="label-text text-black dark:text-white">
                    Recipient-District
                  </span>
                </label>
                <select
                  {...register("District", { required: true })}
                  className="select select-bordered bg-white dark:bg-gray-700 text-black dark:text-white"
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

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Recipient-Upazila
                  </span>
                </label>
                <select
                  {...register("Upazila", { required: true })}
                  className="select select-bordered bg-white dark:bg-gray-700 text-black dark:text-white"
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

            <div className="form-control mt-6">
              <button className="btn btn-outline text-white font-bold bg-red-600 hover:bg-red-950">
                <FaSearch /> Search
              </button>
            </div>
          </form>
        </div>

        {/* SEARCH RESULTS */}
        {isSubmitted && (
          <div className="mt-8 mb-8 border border-black p-11 bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="mt-6">
              {donners.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="table text-black dark:text-white">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Number</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* row */}
                      {donners.map((donner, i) => (
                        <tr key={donner._id}>
                          <td>{i + 1}</td>
                          <td>{donner?.RecipientName}</td>
                          <td>{donner?.recipientLocation}</td>
                          <td>{donner?.email}</td>
                          <td>{donner?.number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h1 className="text-center text-red-900 font-bold text-3xl">
                  No donor Found.
                </h1>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
