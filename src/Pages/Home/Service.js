import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl px-12 mx-auto">
        <figure class="px-10 pt-10">
          <img src={service.picture} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{service.name}</h2>
          <p>{service.description}</p>
          <p>{service.price}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Enroll Course</button>
          </div>
        </div>
      </div>
    );
};

export default Service;