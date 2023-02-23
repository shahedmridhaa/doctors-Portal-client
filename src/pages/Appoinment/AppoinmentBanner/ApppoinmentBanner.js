import React from "react";
import { DayPicker } from "react-day-picker";
import AppoinmentBanner from "../../../assets/images/chair.png";

const ApppoinmentBanner = ({ selectedDate, setSelectedDate }) => {

  return (
    <div>
      <div className="flex justify-center  lg:justify-between gap-20 py-20 flex-wrap ">
        <div className="shadow-lg p-5 rounded-lg">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
        
          />

        </div>
        <div>
          <img className="max-w-lg" src={AppoinmentBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ApppoinmentBanner;
