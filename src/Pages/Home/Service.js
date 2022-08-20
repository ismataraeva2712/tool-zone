import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const navigate = useNavigate()
    const handleEnroll = id => {
        navigate(`/enroll/${id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl px-12 mx-auto">
        <figure class="px-10 pt-10">
          <img src={service.picture} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{service.name}</h2>
          <p>{service.description}</p>
          <p>Course Fee : {service.price} $</p>
          <div class="card-actions">
            <button  onClick={() => handleEnroll(service._id)} class="btn btn-primary">Enroll Course</button>
          </div>
        </div>
      </div>
    );
};

export default Service;