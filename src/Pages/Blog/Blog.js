import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCalendarDateFill, BsFillTagsFill } from 'react-icons/bs';
import info1 from '../../img/info1.jpg'
import info2 from '../../img/info2.jpg'
import blog from '../../img/blog.jpg'
import blog1 from '../../img/blog1.jpg'

const Blog = () => {
    return (
        <div>
            <h1 className='text-primary text-center text-3xl font-bold my-12'>Tools  <span className='text-neutral'>blog</span></h1>
<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-12 mx-auto'>
<AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
  <div><div class="card  bg-base-100 shadow-xl">
  <figure><img className=' h-[300px]' src={info1} alt="Shoes" /></figure>
  <div class="card-body">
    
    <div className='flex justify-center items-center'> 
    <FaUserAlt className='text-primary' />    <p className='ml-2'>Jackson</p>
    <BsFillCalendarDateFill className='text-primary' />    <p className='ml-2'>May 15, 2021</p>
    <BsFillTagsFill className='text-primary' />    <p className='ml-2'>Seasonal</p>
    </div>
    <div class="divider"></div> 
    <h2 class="card-title text-primary">Powerful Motor For The Best Performance Recompound Miter Saw</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae a quibusdam vel quo maxime tempore ipsum suscipit, sint minima, nostrum cumque at omnis reprehenderit, explicabo consequatur sapiente! Aperiam ducimus nostrum veritatis laboriosam dignissimos qui veniam, voluptatum consequatur atque modi corporis, obcaecati quae quam corrupti debitis assumenda. Maiores, distinctio? Quos velit nemo odit autem.</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Read More</button>
    </div>
  </div>
</div></div>
</AnimationOnScroll>
<AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
  <div><div class="card  bg-base-100 shadow-xl">
  <figure><img className='h-[300px]' src={info2} alt="Shoes" /></figure>
  <div class="card-body">
  <div className='flex justify-center items-center'> 
    <FaUserAlt className='text-primary' />    <p className='ml-2'>Niami Nill</p>
    <BsFillCalendarDateFill className='text-primary' />    <p className='ml-2'>Nov 05, 2021</p>
    <BsFillTagsFill className='text-primary' />    <p className='ml-2'>Regular</p>
    </div>
    <div class="divider"></div> 
    <h2 class="card-title text-primary">Why We Used One Of The Best Corded Drill Power Tools</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, inventore? Natus cupiditate veniam aut quia. Aspernatur, tenetur iste placeat a eaque quia corrupti impedit voluptates distinctio, molestiae est aliquam libero odit non quis porro? Nesciunt corrupti deleniti quisquam quis amet?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quisquam vero consectetur quis quos voluptatibus a nam mollitia dolor earum.</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Read More</button>
    </div>
  </div>
</div></div>
</AnimationOnScroll>
<AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
  <div><div class="card  bg-base-100 shadow-xl">
  <figure><img className='h-[300px]' src={blog} alt="Shoes" /></figure>
  <div class="card-body">
  <div className='flex justify-center items-center'> 
    <FaUserAlt className='text-primary' />    <p className='ml-2'>Jesona Mill</p>
    <BsFillCalendarDateFill className='text-primary' />    <p className='ml-2'>Oct 22, 2021</p>
    <BsFillTagsFill className='text-primary' />    <p className='ml-2'>Seasonal</p>
    </div>
    <div class="divider"></div> 
    <h2 class="card-title text-primary">The Most Advanced Quality Tools For Welding Work</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati consequuntur atque dicta placeat aliquid. Nemo mollitia impedit natus dolorem at repellendus modi ipsa nam, quidem facilis voluptate commodi, recusandae voluptatibus distinctio deserunt, veritatis ullam voluptatem ratione provident voluptas magnam. Quas eligendi quisquam non sequi quia eveniet modi ipsa nihil? Accusantium sunt, possimus num.</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Read more</button>
    </div>
  </div>
</div></div>
</AnimationOnScroll>
<AnimationOnScroll animateIn="animate__bounceIn" duration={5} >
  <div><div class="card  bg-base-100 shadow-xl">
  <figure><img className='h-[300px]' src={blog1} alt="Shoes" /></figure>
  <div class="card-body">
  <div className='flex justify-center items-center'> 
    <FaUserAlt className='text-primary' />    <p className='ml-2'>Hilari Neo</p>
    <BsFillCalendarDateFill className='text-primary' />    <p className='ml-2'>july 25, 2021</p>
    <BsFillTagsFill className='text-primary' />    <p className='ml-2'>Regular</p>
    </div>
    <div class="divider"></div> 
    <h2 class="card-title text-primary">How to select tools</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, suscipit mollitia nisi tempore sunt rem earum vero animi cumque facilis voluptate, nulla minima eos hic fugit iusto libero cum quis vel natus repellat. Eaque suscipit autem, et aliquam similique sed dolorum fugiat repudiandae enim illo aut eligendi necessitatibus atque deleniti accusamus natus nulla, delectus veniam ducimus maxime, provident temporibus soluta.</p>
    <div class="card-actions justify-center">
      <button class="btn btn-primary">Read More</button>
    </div>
  </div>
</div></div>
</AnimationOnScroll>
</div>
        </div>
    );
};

export default Blog;