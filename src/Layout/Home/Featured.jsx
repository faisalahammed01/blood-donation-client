const Featured = () => {
  return (
    <div className="bg-base-100">
      <h1 className="text-2xl font-bold text-center pt-4">
        Why Choose Our Blood Donation Platform?
        <div className="divider divider-error mx-auto w-28"></div>
      </h1>{" "}
      <p className="text-center mb-4">
        We connect verified donors with those in need, ensuring a trusted and
        efficient blood donation process. With role-based dashboards, advanced
        search, and comprehensive resources, our platform makes saving lives
        simple and impactful. Join us to make a difference today!
      </p>
      {/* 1 */}
      <div className=" my-4 md:flex">
        <div className="w-4/6">
          <h4 className="text-lg text-center font-bold">Trusted Network</h4>{" "}
          <p className="mt-8 text-center">
            We have partnered with a reliable network of verified blood donors
            and reputed healthcare facilities to ensure safe and effective blood
            donation processes. Rest assured, every connection is secure and
            authentic.
          </p>
          <div className="divider divider-error mx-auto w-40"></div>
        </div>
        <div className="w-3/6">
          <img
            className="w-full h-56"
            src="https://i.ibb.co.com/vBt8KzG/photo-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
      {/* 2 */}
      <div className="my-7 md:gap-x-2 md:flex">
        <div className="w-3/6">
          <img
            className="w-full h-56"
            src="https://i.ibb.co.com/3kvswV2/8295185.png"
            alt=""
          />
        </div>
        <div className="w-4/6">
          <h4 className="text-lg text-center font-bold">Quick Response</h4>{" "}
          <p className="mt-8 text-center">
            Emergencies don't wait, and neither do we. Our platform is built to
            provide immediate access to a network of available blood donors,
            ensuring timely assistance during critical situations
          </p>
          <div className="divider divider-error mx-auto w-40"></div>
        </div>
      </div>
      {/* 3 */}
      <div className="md:flex">
        <div className="w-4/6">
          <h4 className="text-lg text-center font-bold">Advanced Search</h4>{" "}
          <p className="mt-8 text-center">
            Locate the right donor in no time with advanced filters for blood
            type, location, and availability. Whether you're in a remote area or
            need rare blood groups, our search system connects you efficiently
          </p>
          <div className="divider divider-error mx-auto w-40"></div>
        </div>
        <div className="w-3/6">
          <img
            className="w-full h-56"
            src="https://i.ibb.co.com/LQ3nVXw/bldsearch.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
