import React from 'react';

import tool2 from '../../img/tool2.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import b1 from '../../img/b1.jpg'
import b2 from '../../img/b2.jpg'
import b3 from '../../img/b3.jpg'
import t1 from '../../img/t1.png'
import t7 from '../../img/t7.png'
import t6 from '../../img/t6.png'
import t3 from '../../img/t3.png'

import c from '../../img/c.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Banner = () => {
  return (
    <div className='text-center'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 min-h-screen px-12'>



            <div className='flex justify-items-start items-center'>
              <div className='pb-12 mb-12'>
                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="60"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"

                >
                  <p className='text-xl uppercase'>Worlds no. 1 best tools</p>
                  <h1 className='text-5xl font-bold my-3 text-primary uppercase'>Tool-Zone <span className='text-black'>Power Tools</span></h1>
                  <p className='text-xl uppercase'>Available all power tools</p>
                  <button class="btn btn-primary my-5">GET STARTED</button>
                </div>
              </div>
            </div>

            <div> <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="60"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-once="true"

            >  <img className='' src={t7} alt="" /></div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className='grid sm:grid-cols-1 lg:grid-cols-2 min-h-screen px-12'>
          <div className='flex justify-items-start items-center'>
            <div className='pb-12 mb-12'>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="60"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-once="true"

              >
                <p className='text-xl uppercase'>Worlds no. 1 best tools</p>
                <h1 className='text-5xl font-bold my-3 text-primary uppercase'>Tool-Zone <span className='text-black'>Mower Part</span></h1>
                <p className='text-xl uppercase'>Available all power tools</p>
                <button class="btn btn-primary my-5">GET STARTED</button>
              </div>
            </div>
          </div>
          <div><div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"

          >  <img className='' src={t1} alt="" /></div></div>
        </div></SwiperSlide>
        <SwiperSlide><div className='grid sm:grid-cols-1 lg:grid-cols-2 min-h-screen px-12'>
          <div className='flex justify-items-start items-center'>
            <div className='pb-12 mb-12'>
              <p className='text-xl uppercase'>Worlds no. 1 best tools</p>
              <h1 className='text-5xl font-bold my-3 text-primary uppercase'>Tool-Zone <span className='text-black'>Hand Tools</span></h1>
              <p className='text-xl uppercase'>Available all power tools</p>
              <button class="btn btn-primary my-5">GET STARTED</button>
            </div>
          </div>
          <div> <img className='' src={t3} alt="" /></div>
        </div></SwiperSlide>
        <SwiperSlide><div className='grid sm:grid-cols-1 lg:grid-cols-2 min-h-screen px-12'>
          <div className='flex justify-items-start items-center'>
            <div className='pb-12 mb-12'>
              <p className='text-xl uppercase'>Worlds no. 1 best tools</p>
              <h1 className='text-5xl font-bold my-3 text-primary uppercase'>Tool-Zone <span className='text-black'>Safety Tools</span></h1>
              <p className='text-xl uppercase'>Available all power tools</p>
              <button class="btn btn-primary my-5">GET STARTED</button>
            </div>
          </div>
          <div> <img className='' src={t6} alt="" /></div>
        </div></SwiperSlide>

      </Swiper>
    </div>

  );
};

export default Banner;