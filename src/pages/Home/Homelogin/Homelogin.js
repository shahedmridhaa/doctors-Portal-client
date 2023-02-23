import React from 'react';
import testi from '../../../assets/images/testimonial-section-bg.png';

const Homelogin = () => {
    return (
        <div className='py-10 mr-5' style={{
            background:`url(${testi})`
        }}>
     <div className="hero py-10 mt-32">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left lg:pr-20 text-white">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Please login to our website then You get all modern feature in teeth treatment</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Homelogin;