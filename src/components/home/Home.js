import React from 'react';
// import { useDispatch } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
// import { saveGames } from '../actions/newsAction';
import { GamesList } from '../gamesList/GamesList';
import { News } from '../news/News';
import { Search } from '../search/Search';

import './Home.css';

export const Home = () => {
  const url =
    'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15';
  const { data, loading, error } = useFetch(url);

  return (
    <div class="container__home">
      <News />
      <Search />
      {error && <strong>ALGO SALIÓ MAL...</strong>}
      {!loading && <GamesList data={data} />}
    </div>
  );
};
