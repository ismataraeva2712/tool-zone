import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://toolzone.onrender.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='px-12 mx-auto mt-12'>
            <h1 className='text-3xl font-bold my-3 text-primary uppercase text-center'>Tools <span className='text-black'>Collection</span></h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.slice(0,6).map(tool=><Tool
                    key={tool._id}
                    tool={tool}
                    ></Tool>)
                }
            </div>

        </div>
    );
};

export default Tools;