import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceEnroll = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        const url = `https://enigmatic-brushlands-91478.herokuapp.com/course/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-bold text-secondary my-5'>enroll course {item.id}</h1>
           <div className='flex justify-center items-center'>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={item.picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default ServiceEnroll;