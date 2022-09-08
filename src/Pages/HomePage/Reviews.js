import React from 'react';
import { useQuery } from 'react-query';

import Review from './Review';
import Loading from './../../Loginpage/Loading';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://toolzone.onrender.com/review').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-12 mx-auto'>
        <h2 className='text-3xl font-bold my-12 text-primary uppercase text-center'>Reviews of <span className='text-black'>Tool-Zone</span> </h2>
        <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                reviews.map(r => <Review
                    key={r._id}
                    r={r}
                ></Review>)
            }
        </div>
    </div>
    );
};

export default Reviews;