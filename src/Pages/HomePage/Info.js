import React from 'react';
import info7 from '../../img/info7.jpg'
import info6 from '../../img/info6.jpg'
import info8 from '../../img/info8.jpg'
import info4 from '../../img/info4.jpg'
import info3 from '../../img/info3.jpg'
import t5 from '../../img/t5.png'
import hand from '../../img/hand.png'
import info20 from '../../img/info20.png'
import info21 from '../../img/info21.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const info = () => {
    return (
        <div className='px-12 mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

                <div className='bg-gradient-to-r from-slate-900 to-gray-900 p-2 rounded-lg' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
                    <div className='flex justify-center items-center'>
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                            <div className='text-primary'>
                                <h2 className='text-xl font-bold'>
                                    Big Sale
                                </h2>
                                <h1 className='text-3xl font-bold'>Up to 75 %</h1>
                                <p><small>from</small></p>
                                <p className='text-xl font-bold'>$ 18.99</p>
                            </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">  <img className='h-[200px]' src={info21} alt="" />
                        </div>
                    </div>
                </div>


                <div className='bg-gradient-to-r from-slate-900 to-gray-900 p-2 rounded-lg' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
                    <div className='flex justify-center items-center'>
                    <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                        <div className='text-primary'>
                            <h2 className='text-xl font-bold'>
                                High-end
                            </h2>
                            <h1 className='text-3xl font-bold'>Power Tools</h1>
                            <p><small>from</small></p>
                            <p className='text-xl font-bold'>$ 20.99</p>
                        </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                        <img className='h-[200px]' src={hand} alt="" />
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-slate-900 to-gray-900 p-2 rounded-lg' style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
                    <div className='flex justify-center items-center'>
                    <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                        <div className='text-primary'>
                            <h2 className='text-xl font-bold'>
                                Lawn
                            </h2>
                            <h1 className='text-3xl font-bold'>Mower Tool</h1>
                            <p><small>from</small></p>
                            <p className='text-xl font-bold'>$ 30.99</p>
                        </div>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
                        <img className='h-[200px]' src={info20} alt="" />
                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default info;