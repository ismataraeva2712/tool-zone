import React from 'react';
import banner from '../../img/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 px-12 mx-auto">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Ed-Tech</h1>
      <p class="py-6">We provide many skill development courses,ielts,spoken english for our youth generation.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;