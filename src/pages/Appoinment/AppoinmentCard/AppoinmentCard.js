import React from 'react';

const AppoinmentCard= ({allcard, setTreatment}) => {
  //console.log(appoinmnetOption);

  console.log(allcard);
  
  
if(!allcard ){
  return <div></div>
}


  return (
    
        <div className="card shadow-lg text-black">
<div className="card-body text-center">
    <h2 className="card-title justify-center">{allcard?.name}</h2>
   <div className='py-2'>
     <p>{
      allcard?.slots?.length > 0 ? allcard?.slots[0] : "Try another day"}
      </p>
      <p>
        {allcard?.slots?.length} {allcard?.slots?.length > 1 ? 'spaces' : 'space'}
      </p>
      <p>Price: ${allcard.price}</p>
   </div>
  
    <div className="card-actions justify-center">
      <label
      onClick={() => setTreatment(allcard)}
       htmlFor="booking-modal"
       className="btn btn-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none"
       >Booking Now</label>

    </div>
  </div>
</div>

    );
};




export default AppoinmentCard;