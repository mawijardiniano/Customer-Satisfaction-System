import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="p-5 text-center">
      <header className="bg-gray-100 p-3 border-b border-black">
        <h1>Customer Satisfaction Feedback</h1>
      </header>

      <p className="bg-blue-100 p-4 rounded-lg my-4">
        We value your feedback! Please take a moment to let us know about your
        experience.
      </p>
      <button
        className="bg-blue-500 text-white border-none py-2 px-4 rounded cursor-pointer"
        onClick={() => alert("Feedback form coming soon!")}
      >
        Give Feedback
      </button>

      <footer className="mt-5 p-3 border-t border-gray-300">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
