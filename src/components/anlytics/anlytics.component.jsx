import React from "react";
import Laptop from "../../images/laptop.jpg";

const Anlytics = () => {
  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANLYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage data analytics centrally
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
            velit enim architecto earum delectus maxime eius. Ipsa, minus
            repellat. Pariatur ipsam necessitatibus facilis quaerat aperiam
            repellat sed explicabo nostrum itaque.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium text-[#00df9a] my-6 md:mx-0 mx-auto py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anlytics;
