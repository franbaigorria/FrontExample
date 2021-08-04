//Container de la sección "Home"

import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { GamesList } from '../gamesList/GamesList';
import { News } from '../news/News';
import { Search } from '../search/Search';
import { Spinner } from '../ui/Spinner';

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
      {loading ? <Spinner /> : <GamesList data={data} />}
    </div>
  );
};
