import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from './Card';

export const GamesList = ({ data }) => {
  const { searchTerms } = useSelector((state) => state.search);
  if (searchTerms) {
    data = data.filter((d) =>
      d.title.toLocaleLowerCase().includes(searchTerms)
    );
  }

  return (
    <div
      className="container-fluid bg-trasparent my-4 p-3"
      style={{ position: 'relative' }}>
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        {data.map((game) => (
          <Card key={game.gameID} {...game}></Card>
        ))}
      </div>
    </div>
  );
};
