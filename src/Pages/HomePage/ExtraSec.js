import React from 'react';
import info5 from '../../img/info5.jpg'
const ExtraSec = () => {
    return (
        <div className='my-12'>
            <div
                            data-aos="zoom-out"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
            <img className='w-full' src={info5} alt="" />
            </div>
        </div>
    );
};

export default ExtraSec;