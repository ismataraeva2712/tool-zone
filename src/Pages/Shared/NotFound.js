import React from 'react';
import not  from '../../img/not.png'
const NotFound = () => {
    return (
        <div>
             <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-once="true">
        <div>
        <div className='flex justify-center  mt-12'>
            <img className='h-[350px]' src={not} alt="" />
           
        </div>
       <h1 className='text-red-600 text-center text-3xl font-bold my-12'>404 !!! NOT FOUND !!!</h1>
        </div>
        </div>
        </div>
    );
};

export default NotFound;