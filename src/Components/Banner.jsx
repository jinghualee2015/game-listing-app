import React, { useEffect } from 'react'

function Banner({getBanner}) {
    useEffect(() => {
        console.log("getBanner", getBanner);
        console.log(getBanner.background_image);
    }, [])
    return (
        <div className='relative'>
            <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
                <h2 className='text-[24px] text-white font-bold'>{getBanner.name}</h2>
                <button className='bg-blue-700 text-white px-2 p-1'>Get Now</button>
            </div>
            <img src={getBanner.background_image} className='md:h-[320px] w-full object-cover rounded-lg'/>
        </div>
    )
}

export default Banner