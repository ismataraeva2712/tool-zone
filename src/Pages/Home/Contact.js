import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      <h1 className="text-2xl font-bold text-secondary">Contact us</h1>
      <h1 className="text-2xl font-bold text-primary">Send a message.</h1>
      <p className="py-6">Do you have any question or need any information ,feel free and just send a message now.we will response within 24 hours.Stay with us.Thank you.</p>
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
            <span className="label-text"> Message</span>
          </label>
          <input type="text" placeholder="Your Message" className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Click Here</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;