import React from 'react';
import treatment from "../../../assets/images/treatment.png"

const About = () => {
    return (
      
 <div className="hero mt-40">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="max-w-md rounded-lg shadow-2xl" alt=".." />
    <div className='mt-10 lg:pl-20 sm:px-10'>
                <h1 className='text-4xl font-bold'>Exceptional Dental Care, on your terms</h1>
                <p className='px-10px py-7'>We understand that many patients are reluctant to visit the dentist due to dental anxiety. Some people put off the dental care they need. They often end up with decay or other oral health problems. We offer complimentary oral sedation if you have anxiety.Our dentists will explain the dental treatment you will receive before they begin. Always reassuring, that you feel comfortable. Here, you will feel special and cared for. We perform treatments gently and slowly.</p>
                <button className='btn border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Get started</button>
            </div>
  </div>
</div>
      
    );
};

export default About;