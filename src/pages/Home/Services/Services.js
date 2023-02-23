import React from "react";
import Fluride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whiteness from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const service = [
    {
      id: 1,
      title: "Fluoride treatment",
      img: Fluride,
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.",
    },
    {
      id: 2,
      title: "Cavity filling",
      img: cavity,
      description:
        "A cavity filling is when the dentist fills the opening in your tooth with some kind of material..",
    },
    {
      id: 3,
      title: "Teeth whetining",
      img: whiteness,
      description:
        "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth.",
    },
  ];

  return <div className="mt-40">


    <div className="my-16 text-center">
        <p className="text-green-500">Our Service</p>
        <h1 className="text-4xl font-bold pt-1">Service we provide</h1>
    </div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-5">
        {
            service.map(service => <Service
            key={service.id}
            service={service}
            ></Service>)
        }
    </div>
  </div>;
};

export default Services;
