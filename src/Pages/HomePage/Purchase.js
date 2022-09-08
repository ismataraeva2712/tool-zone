import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {
    const { id } = useParams()
    const [update, setUpdate] = useState({})
    const [item, setItem] = useState({})
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `https://toolzone.onrender.com/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        const booking = {
            name: user.displayName,
            email: user.email,
            orderQuantity: parseInt(data.orderQuantity),
            phone: data.phone,
            productName: item.name,
            price: item.price,
            picture:item.picture

        }
        console.log(booking);
        fetch('https://toolzone.onrender.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Booking successfull')
            })


    };


    return (
        <div>
            <h1 className='text-3xl font-bold my-3 text-primary uppercase text-center mt-5'>Tools <span className='text-black'>Purchase</span></h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-3 px-12'>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={item.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Order for : {item.name}
      <div className="badge badge-primary">TOP</div>
    </h2>
    <p>  {item.description}</p>
    <p>Price: $ {item.price}</p>
                    <p>Available Quantity: {item.availableQuantity}</p>
                    <p>Minimum Quantity  : {item.minimumOrderQuantity}</p>
   
  </div>
</div>
            </div>
            {/* ===================== */}
            <div className="max-w-lg">
                <div className='card w-full'>
                    <form className='card-body' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='font-bold text-xl'>Hello, <span className='text-primary'>{user?.displayName}</span></h1>
                        {/* name  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                disabled
                                className="input input-bordered bg-white"
                                {...register("name")}
                                defaultValue={user?.displayName}
                            />
                        </div>

                        {/* email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                disabled
                                className="input input-bordered bg-white"
                                {...register("email")}
                                defaultValue={user?.email}
                            />
                        </div>
                        {/* ======================== */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="phone"

                                className="input input-bordered bg-white"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'phone is Required'
                                    },

                                })}

                            />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.itemName.message}</span>}
                            </label>
                        </div>

                        {/* =================== */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">order</span>
                            </label>
                            <input
                                type="number"
                                placeholder="order Quantity"
                                className="input input-bordered bg-white"
                                {...register("orderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'orderQuantity is Required'
                                    },
                                    min: item?.minimumOrderQuantity,
                                    max: item?.availableQuantity
                                })}
                            />
                            <label className="label">
                                {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity.message}</span>}

                                {errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-500">You have to Purchase minimum {item?.minimumOrderQuantity} items</span>}

                                {errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-500">You can't Purchase up to available {item?.availableQuantity} items</span>}
                            </label>
                        </div>
                        {/* ==============submit=============== */}
                        <div className="form-control mt-6">
                            <input type='submit' value='Purchase' className="btn btn-primary" />
                        </div>

                    </form>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Purchase;