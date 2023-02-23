import React from 'react';
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
import Infocard from './Infocard';

const Infocards = () => {

    const infocard =[
        {
            "id" : 1,
             "title":"Oppening Hours",
             "img":clock,
             "description":"8:30 am to 6 pm · ",
              "bgclass":"bg-gradient-to-r from-cyan-500 to-blue-500 "
        },
        {
            "id" : 2,
             "title":"Visit Our location",
             "img":marker,
             "description":"Dhaka bangladesh. chandpur Hajigong",
              "bgclass":"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
        },
        {
            "id" : 3,
             "title":"Contact us now",
             "img":phone,
             "description":"01842485396",
              "bgclass":"bg-gradient-to-r from-cyan-500 to-blue-500 "
        },
    ]



    return (
        <div className='grid sm:grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
            {
                infocard.map(card =><Infocard
                 key={card.id}
                 card={card}
                ></Infocard>)
            }
        </div>
    );
};

export default Infocards;