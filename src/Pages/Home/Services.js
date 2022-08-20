import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-brushlands-91478.herokuapp.com/course')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div 
            className='my-12'>
            <h1 className='text-xl font-bold uppercase text-secondary'>Our services</h1>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    services.map((service,index) => <Service
                        key={service._id}
                        service={service}
                        index={index}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;