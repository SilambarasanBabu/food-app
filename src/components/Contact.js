import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-8 bg-green-50 h-screen">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">Have questions or suggestions? Reach out to us!</p>

      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md border-black"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md border-black"
            placeholder="Alpha.dev@example.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md border-black"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-100 text-black p-2 rounded-md hover:bg-green-300 border border-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
