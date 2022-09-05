import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const{name,_id,price,description,availableQuantity,minimumOrderQuantity,picture}=tool
    const navigate = useNavigate()
  const handlePurchase = (id) => {
    navigate(`/tools/${id}`)
  }
    return (
      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn duration={5}">
        <div class="card sm:max-w-sm lg:w-96 bg-base-100 shadow-xl">
        <figure><img className='h-[300px]' src={picture} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
           {name}
            <div class="badge badge-primary">TOP</div>
          </h2>
          <p>{description}</p>
          <p>Available Quantity : {availableQuantity}</p>
          <p> Minimum Order Quantity : {minimumOrderQuantity}</p>
          <p>Price : $ {price}</p>
          <div class="card-actions justify-end">
           
            <div onClick={() => handlePurchase(_id)} class="badge badge-outline p-5 btn-primary uppercase  font-bold">purchase</div>
          </div>
        </div>
      </div>
      </AnimationOnScroll>
    );
};

export default Tool;