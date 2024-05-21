import React from "react";
import User from "./User";
const About = () => {
  return (
    <div className="container mx-auto p-8 bg-green-50">
      <div className="p-6 rounded-md shadow-md  bg-green-50">
        <h1 className="text-3xl font-bold mb-4">About Our Food App</h1>
        <p className="text-gray-700 mb-6">
          Welcome to our food app! We are passionate about delivering delicious
          and high-quality meals to our customers.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide you with a delightful dining experience by
            offering a diverse menu of mouth-watering dishes made with fresh,
            locally-sourced ingredients.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Wide variety of delicious and nutritious meals.</li>
            <li>Fresh ingredients sourced from local producers.</li>
            <li>Quick and reliable delivery services.</li>
            <li>Passionate chefs dedicated to culinary excellence.</li>
          </ul>
        </div>
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default About;
