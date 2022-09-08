import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loginpage/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const { data: orders, isLoading, refetch } = useQuery('users', () => fetch('https://toolzone.onrender.com/bookings').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>


        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>product Name</th>
                        <th>orderQuantity</th>
                        <th>price</th>
                        <th>phone</th>

                        <th>Action</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((singleOrder, index) => <ManageOrderRow
                            key={singleOrder._id}
                            singleOrder={singleOrder}
                            refetch={refetch}
                            index={index}

                        ></ManageOrderRow>)
                    }


                </tbody>
            </table>
        </div>

    </div>
    );
};

export default ManageOrder;