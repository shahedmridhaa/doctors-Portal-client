import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appoinmnet from "../../../assets/images/appointment.png";

const HomeAppoinment = () => {
  return (
    <div
      className="mt-32  p-5 lg:mt-64 "
      style={{
        background: `Url(${appoinmnet})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-44 hidden lg:block lg:w-1/2 rounded-lg "
            alt=""
          />
          <div className="text-white px-5 ">
            <h1 className="text-5xl font-bold">Make An Appoinment Today</h1>
            <p className="py-6">
              It is a long established fact that a leader in be ostracted by the
              readabe content of a page when looking at its layout. The point of
              using Lorem pours that it has a more or-less normal distribution
              of letters as opposed to using Content here content here, making
              it look ke readable English Mary desktop publishing packages and
              web Page
            </p>
            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Appoinment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAppoinment;
