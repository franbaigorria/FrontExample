import React from 'react';
import { GamesList } from '../gamesList/GamesList';
import { News } from '../news/News';
import { Search } from '../search/Search';

export const Home = () => {
  return (
    <>
      <News />
      <Search />
      <GamesList />
    </>
  );
};
