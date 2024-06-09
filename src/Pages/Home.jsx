import React, { useEffect, useState } from 'react'
import GenerList from '../Components/GenerList'
import GloabalAPI from '../Services/GloabalAPI'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import PopularGames from '../Components/PopularGames';

function Home() {
  const [gameList, setGameList] = useState([]);
  const [popularGames, setPopularGames] = useState([]);

  useEffect(() => {
    getAllGamesList();
    getGameListByGeneresById();
  }, [])

  const getAllGamesList = () => {
    GloabalAPI.getAllGames.then((resp) => {
      console.log('gameList', resp.data.results);
      setGameList(resp.data.results);
    })

  }
  const getGameListByGeneresById = (id) => {
    GloabalAPI.getGameListByGenreId(4).then((resp) => {
      // console.log(resp.data.results);
      setPopularGames(resp.data.results);
    })
  }

  return (
    <div className='grid grid-cols-4 px-8'>
      <div className='h-full hidden md:block mr-2'>
        <GenerList />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {(gameList?.length > 0 && popularGames?.length > 0) ? <div>
          < Banner getBanner={gameList[0]} />
          <TrendingGames gameList={gameList} />
          <PopularGames popularGames={popularGames} />
        </div> : null}
      </div>
    </div>
  )
}

export default Home