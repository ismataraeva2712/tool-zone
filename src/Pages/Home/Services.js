import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-12'>
            <h1 className='text-xl font-bold uppercase'>Our services</h1>
            <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;