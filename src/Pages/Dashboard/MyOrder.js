import React from 'react';
import { useState, useEffect } from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import MyOrderRow from './MyOrderRow';

const MyOrder = () => {
    const[order,setOrder]=useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>setOrder(data))
        }
    }, [user])
    const handleDelete = orderid => {
        const proceed = window.confirm('Are you sure ?? wanna deleted?')
        if (proceed) {
          const url = `http://localhost:5000/booking/${orderid}`
          fetch(url, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
    
              const remainingItem = order.filter(i => i._id !== orderid)
              setOrder(remainingItem)
            })
        }
      }
    return (
        <div>
            <div>

<div className="overflow-x-auto">
  <table className="table w-full ">

    <thead >
      <tr  >
        <th></th>
        <th>Tool Image</th>
        <th>Name</th>
        <th>email</th>
        <th>produc Name</th>
        <th>orderderQuantity</th>
        <th>Phone</th>

        <th>Action</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        order.map((orderBook, index) => <MyOrderRow
          key={orderBook._id}
          index={index}
          orderBook={orderBook}
          handleDelete={handleDelete}
        ></MyOrderRow>)
      }




    </tbody>
  </table>
</div>
</div>
        </div>
    );
};

export default MyOrder;