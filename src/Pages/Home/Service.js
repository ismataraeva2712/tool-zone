import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Service = ({ service,index }) => {
  const navigate = useNavigate()
  const handleEnroll = id => {
    navigate(`/enroll/${id}`)
  }
  return (
    <AnimationOnScroll animateIn="animate__bounceIn" delay={`1000+${parseInt(index)*1000}`} initiallyVisible={true}>
  

    <div
      // data-aos="fade-right"
      // data-aos-offset="200"
      // data-aos-delay={`50+${parseInt(index)*10}`}
      // data-aos-duration={`1000+${parseInt(index)*1000}`}
      // data-aos-easing="ease-in-out"
      // data-aos-once="true"
      
      className="card w-96 bg-base-100 shadow-xl px-12 mx-auto">
      <figure className="px-10 pt-10">
        <img src={service.picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <p>Course Fee : {service.price} $</p>
        <div className="card-actions">
          <button onClick={() => handleEnroll(service._id)} className="btn btn-primary">Enroll Course</button>
        </div>
      </div>
    </div>
    </AnimationOnScroll>
  );
};

export default Service;