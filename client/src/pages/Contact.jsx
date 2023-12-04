import React from "react";
import Footer from "../components/Footer";
import contactImg from "../assets/contactimg.gif";

const Contact = () => {
  return (
    <div >
      <section className="">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center">
          <header className="mx-auto py-20 text-3xl font-semibold lg:w-[70%]">
            <h1 className="bg-gradient-to-b from-[#2e9733] via-[#09725b] to-[#318855] text-transparent bg-clip-text font-bold text-5xl">
              Get in Touch
            </h1>
            Cultivate Conversations, Grow Well-being.
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Your Experience Shapes Our OxyGarden Story. Reach Out and Let
              Wellness Bloom Together.
            </p>
          </header>
        </div>
      </section>

      <form
        className="flex flex-col gap-7"
        //   onSubmit={handleSubmit(submitContactForm)}
      >
       <div className="flex flex-row">
      <div className="w-1/2">
        <img
          src={contactImg}
          alt="contact us"
          className="w-[600] h-[600] object-cover pl-[100px]"
        />
      </div>
      <div className="w-1/2 p-8">
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 font-bold bg-gradient-to-b text-2xl from-[#2e9733] via-[#09725b] to-[#318855] bg-clip-text text-transparent focus:outline-none focus:shadow-outline border-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
