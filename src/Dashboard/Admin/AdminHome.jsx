import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaMoneyBill, FaUser } from "react-icons/fa";
import { FaHandHoldingDroplet } from "react-icons/fa6";

const AdminHome = () => {
  const [donners, setDonner] = useState([]);
  const [funds, setFund] = useState([]);
  const [bloodreq, setBloodReq] = useState([]);

  fetch(`https://blood-donation-server-eta-eight.vercel.app/donor`)
    .then((res) => res.json())
    .then((donner) => setDonner(donner));
  // -----------------------------------
  fetch(`https://blood-donation-server-eta-eight.vercel.app/fund`)
    .then((res) => res.json())
    .then((funds) => setFund(funds));
  // ----------------------------------------
  fetch(`https://blood-donation-server-eta-eight.vercel.app/DonationRequrests`)
    .then((res) => res.json())
    .then((bloodreq) => setBloodReq(bloodreq));
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-center text-4xl">
        <span className="font-semibold">--{user?.displayName}</span> Sir,
        Welcome to Admin Panel--
      </h2>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* card */}

        {/* 1 */}
        <div className="card w-8/12 h-64 bg-red-950  rounded-full ">
          <h2 className="text-5xl text-white flex justify-center mt-4">
            <FaUser></FaUser>
          </h2>{" "}
          <h2 className="text-2xl mt-4 text-white text-center">Donors</h2>
          <h3 className="text-4xl mt-4 text-white text-center">
            ---{donners.length} ---
          </h3>
        </div>
        {/* 2 */}
        <div className="card w-8/12 h-64 bg-red-950  rounded-full ">
          <h2 className="text-5xl text-white flex justify-center mt-4">
            <FaMoneyBill></FaMoneyBill>
          </h2>{" "}
          <h2 className="text-2xl mt-4 text-white text-center">Funding</h2>
          <h3 className="text-4xl mt-4 text-white text-center">
            --- {funds.length} ---
          </h3>
        </div>
        {/* 3 */}
        <div className="card w-8/12 h-64 bg-red-950  rounded-full ">
          <h2 className="text-5xl text-white flex justify-center mt-4">
            <FaHandHoldingDroplet></FaHandHoldingDroplet>
          </h2>{" "}
          <h2 className="text-2xl mt-4 text-white text-center">
            Blood Request
          </h2>
          <h3 className="text-4xl mt-4 text-white text-center">
            --- {bloodreq.length} ---
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
