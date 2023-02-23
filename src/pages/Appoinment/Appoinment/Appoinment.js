import React, { useState } from 'react';
import ApppoinmentBanner from '../AppoinmentBanner/ApppoinmentBanner';
import AppoinmentOption from '../AppoinmentCard/AppoinmentCard';
import AvaiavailAppoinment from '../AvailavailAppoinment/AvaiavailAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())


    return (
        <div className="max-w-[1440px] mx-auto px-10">
            <ApppoinmentBanner
             selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}>
             </ApppoinmentBanner>

            <AvaiavailAppoinment
            selectedDate={selectedDate}>   
            </AvaiavailAppoinment>

            <AppoinmentOption></AppoinmentOption>
        </div>
    );
};

export default Appoinment;