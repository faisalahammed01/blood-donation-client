import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp284b6", // Replace with your EmailJS Service ID
        "template_6eok0mr", // Replace with your EmailJS Template ID
        form.current,
        "tfhng-JnJ5_qnRMZy" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="bg-white py-6 text-black">
      <h1 className="text-3xl font-bold text-center pb-9 text-red-600">
        CONTACT
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-200">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-6">
              Need assistance or interested in collaborating? Drop us a message!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-4 rounded-xl shadow-md">
                  <FaPhoneAlt className="text-red-600 text-xl"></FaPhoneAlt>
                </div>
                <span className="text-sm lg:text-lg">+8801820037321</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-4 rounded-xl shadow-md">
                  <FaEnvelope className="text-red-600 text-xl"></FaEnvelope>
                </div>
                <span className="text-sm lg:text-lg">
                  faisalahammed003@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-4 rounded-xl shadow-md">
                  <FaMapMarkerAlt className="text-red-600 text-xl"></FaMapMarkerAlt>
                </div>
                <span className="text-sm lg:text-lg">
                  Chittagong, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-red-200">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white text-black rounded-xl border border-red-300 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-500"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white text-black rounded-xl border border-red-300 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-white text-black rounded-xl border border-red-300 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-xl text-lg font-semibold hover:bg-red-950 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container to display messages */}
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default ContactUs;
