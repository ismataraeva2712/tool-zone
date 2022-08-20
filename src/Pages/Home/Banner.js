import React from 'react';
import banner from '../../img/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-12 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div data-aos="fade-down"
     data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="3000"
     data-aos-easing="ease-in-out"
     data-aos-once="true"><img src={banner} className="lg:max-w-sm rounded-lg shadow-2xl" /></div>  
    <div>
     <div
      data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
     data-aos-once="true"
    > <h1 
     className="text-5xl font-bold text-secondary">Ed-Tech</h1></div>
     <div
      data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="70"
     data-aos-duration="2000"
     data-aos-easing="ease-in-out"
     data-aos-once="true"
    >  <p className="py-6">We provide many skill development courses,ielts,spoken english for our youth generation.</p></div>
     <div
      data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="100"
     data-aos-duration="3000"
     data-aos-easing="ease-in-out"
     data-aos-once="true"
    >   <button className="btn btn-primary">Get Started</button></div>
     
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;