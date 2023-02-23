import React from "react";

const Infocard = ({ card }) => {
  const { title, img, description, bgclass } = card;
  return (
    <div>
      <div
        className={`card card-side bg-base-100 shadow-xl p-5 text-white ${bgclass}`}
      >
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
