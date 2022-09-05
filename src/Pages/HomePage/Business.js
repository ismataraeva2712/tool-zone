import React from 'react';
import { FaTruck, FaUsers ,FaTools,FaPeopleCarry} from 'react-icons/fa';

const Business = () => {
    return (
        <div className='mt-12 text-center'>
             <h1 className='text-3xl font-bold my-3 text-primary uppercase text-center'>Business <span className='text-black'>Summery</span></h1>
             <div
                            data-aos="zoom-out"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
             <div class="stats stats-vertical lg:stats-horizontal shadow">
  
             <div class="stat">
   
    <div class="stat-title">Total Customers</div>
    <div className='flex justify-center item-center my-2'><FaPeopleCarry className='text-primary text-5xl mr-3' /> <div class="stat-value text-black">20 <span className='text-black'>K</span></div></div>
    <div class="stat-desc">21% more than last month</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Annual revenue</div>
    <div class="stat-value text-primary">2.6 <span className='text-black'>M</span></div>
    <div class="stat-desc">21% more than last Year</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Reviews</div>
   <div className='flex justify-center item-center my-2'><FaUsers className='text-primary text-5xl mr-3' /> <div class="stat-value text-black">  4,200+</div></div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Our Delivery</div>
    <div className='flex justify-center item-center my-2'><FaTruck className='text-primary text-5xl mr-3' /> <div class="stat-value text-black">24 HOUR</div></div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div class="stat">
    <div class="stat-title">Tools</div>
    <div className='flex justify-center item-center my-2'><FaTools className='text-primary text-4xl mr-3' /> <div class="stat-value text-black">20 <span className='text-black'>K</span></div></div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Total Subscriber</div>
    <div class="stat-value text-primary">15.6 <span className='text-black'>K</span></div>
    <div class="stat-desc">21% more than last year</div>
  </div>
  
  
</div>
</div>
        </div>
    );
};

export default Business;