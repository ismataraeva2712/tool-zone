import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ singleOrder, refetch, index }) => {
    const { name,picture, price, orderQuantity, productName, email, phone, _id } = singleOrder
    const handleShippedOrder = id => {

        fetch(`https://toolzone.onrender.com/shipped/${id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Shipped Order Successfully')
                refetch()
            })
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?? wanna deleted?')
        if (proceed) {
            fetch(`https://toolzone.onrender.com/booking/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('successFully delete order')
                        refetch()
                    }
                })
        }

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th><img className='h-[60px]' src={picture} alt="" /></th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>{price}</td>
            <td>{phone}</td>

            <td>{singleOrder?.paid && !singleOrder?.shipped && <button onClick={() => handleShippedOrder(_id)} className='btn btn-primary btn-xs'>Pending</button>}
                {singleOrder?.shipped && <button onClick={() => handleShippedOrder(_id)} className='btn btn-success btn-xs'>Shipped</button>}
                {!singleOrder?.paid && <button onClick={() => handleDelete(_id)} className='btn btn-primary font-bold btn-xs'>Cancel</button>}
            </td>
            <td>{singleOrder?.paid && <p className='text-green-600'>paid</p>}
                {!singleOrder?.paid && <p className='text-red-600'>Unpaid</p>}</td>



        </tr>
    );
};

export default ManageOrderRow;