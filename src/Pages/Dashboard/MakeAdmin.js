import React from 'react';
import {useQuery} from 'react-query'
import Loading from './../../Loginpage/Loading';
import MakeAdminRow from './MakeAdminRow';
const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://toolzone.onrender.com/user', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }

  }).then(res => res.json()))
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
             
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index) => <MakeAdminRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></MakeAdminRow>)
            }


          </tbody>
        </table>
      </div> 
        </div>
    );
};

export default MakeAdmin;