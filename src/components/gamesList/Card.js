import React from 'react';
import './Games.css';

const stars = {
  a: 'far',
  b: 'far',
  c: 'far',
  d: 'far',
  e: 'far',
};

export const Card = (game) => {
  if (game.steamRatingPercent > 20) {
    stars.a = 'fas';
  }
  if (game.steamRatingPercent > 40) {
    stars.b = 'fas';
  }
  if (game.steamRatingPercent > 60) {
    stars.c = 'fas';
  }
  if (game.steamRatingPercent > 80) {
    stars.d = 'fas';
  }
  if (game.steamRatingPercent > 95) {
    stars.e = 'fas';
  }
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={game.thumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>

          <p className="card-text">
            <small className="text-muted">Steam Review</small>
            <br />
            <>
              <i className={`${stars.a} fa-star`}></i>
              <i className={`${stars.b} fa-star`}></i>
              <i className={`${stars.c} fa-star`}></i>
              <i className={`${stars.d} fa-star`}></i>
              <i className={`${stars.e} fa-star`}></i>
            </>
          </p>

          <button className="btn btn-primary btn-block">
            <strike>${game.normalPrice}</strike>
            <span> ${game.salePrice}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
