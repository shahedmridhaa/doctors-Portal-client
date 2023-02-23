import React from 'react';

const Modal = ({doctor, handledelete, closeModal}) => {
    return (
        <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="delete-doctor" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Do you want to delete dr {doctor.name}</h3>
    <p className="py-4">If you want to delete he don't come back</p>
    <div className="modal-action">
      <label htmlFor="delete-doctor" onClick={() => handledelete(doctor.email)} className="btn">Yay!</label>
      <label htmlFor="delete-doctor" onClick={ closeModal} className="btn">close</label>

    </div>
  </div>
</div> 
        </div>
    );
};

export default Modal;