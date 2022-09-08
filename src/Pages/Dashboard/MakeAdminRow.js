import React from 'react';
import { toast } from 'react-toastify';

const MakeAdminRow = ({ user, index, refetch }) => {
    const { email, role, name } = user
    const makeAdmin = () => {
        fetch(`https://toolzone.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Sorry! failed to admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully made an admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>

            
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className=' btn btn-primary  font-bold fw-bold btn-xs'>Make Admin</button> || role == 'admin' && <button  className=' btn btn-neutral text-primary  font-bold fw-bold btn-xs'> Admin</button> }</td>
        </tr>
    );
};

export default MakeAdminRow;