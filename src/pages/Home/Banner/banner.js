import React from "react";
import chair from "../../../assets/images/chair.png"
import './Banner.css'

const banner = () => {
  return (
    <div className="banner">
     <div className="max-w-[1440px] mx-auto">
     <div className="w-full">
        <div className="  flex justify-between lg:flex-row-reverse">
          <img
            src={chair} alt="..."
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div >
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br/>
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none">Get Started</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default banner;
