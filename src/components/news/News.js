//Componente que renderiza las "novedades" de los juegos
//para este caso práctico se decidió por utilizar una única imagen
import React from 'react';
import './News.css';

export const News = () => {
  return (
    <div className="container">
      <img
        src={'https://www.tgsup.group/wp-content/uploads/2016/06/12-3.jpg'}
        className="animate__animated animate__slideInLeft img-new"
        alt="New Games Steam"></img>
    </div>
  );
};
