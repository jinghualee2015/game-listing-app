import React, { useEffect, useState } from 'react'
import GloabalAPI from '../Services/GloabalAPI'

function GenerList() {
    const [data, setData] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList();
    }, [])

    const getGenreList = () => {
        GloabalAPI.getGenreList.then((resp) => {
            let results = resp.data.results;
            setData(results);
        })
    }

    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
            {data.map((item, index) =>
                <div onClick={() => setActiveIndex(index)} key={item.id} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600
                ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}>
                    <img src={item.image_background} className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex==index ? "sacle-105":null}`} />
                    <h3 className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex==index ? "font-bold":null}`}>{item.name}</h3>
                </div>
            )}
        </div>
    )
}

export default GenerList