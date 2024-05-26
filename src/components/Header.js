import React from 'react';

const Header = ({ gettingFilms, gettingTopMovies }) => {
  return (
    <header>
      <form onSubmit={gettingFilms}>
        <input type="text" name="query" placeholder="Поиск фильмов/сериалов..." />
        <button type="submit">Поиск</button>
      </form>
      <button className="top-movies-button" onClick={() => gettingTopMovies(1)}>Топ фильмов</button>
    </header>
  );
};

export default Header;
