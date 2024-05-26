import React from 'react';

const Info = ({ title, description, posterUrl, movies, topMoviesClicked }) => {
  const getMostPopularMovie = () => {
    if (movies.length > 0 && !topMoviesClicked) {
      const sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
      return sortedMovies[0];
    }
    return null;
  };

  const mostPopularMovie = getMostPopularMovie();

  return (
    <div>
      {!topMoviesClicked && mostPopularMovie && (
        <div className="movie-info">
          <div className="movie-card">
            <h2>{mostPopularMovie.name}</h2>
            <img src={mostPopularMovie.poster.url} alt={mostPopularMovie.name} />
            <p>{mostPopularMovie.description || 'Описания для фильма нет'}</p>
          </div>
        </div>
      )}
      {!topMoviesClicked && title && (
        <div className="searched-movie-info">
          <h2>{title}</h2>
          <img src={posterUrl} alt={title} />
          <p>{description || 'Описания для фильма нет'}</p>
        </div>
      )}
      {!topMoviesClicked && movies.length > 0 && (
        <>
          <p className="description-box">{mostPopularMovie.description || 'Описания для фильма нет'}</p>
          <p className={topMoviesClicked ? "similar-movies" : "similar-movies hidden"}>
            Ещё фильмы похожие по названию:
          </p>
          <div className="movies-list">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img src={movie.poster.url} alt={movie.name} />
                <h3>{movie.name}</h3>
                <p>{movie.description || 'Описания для фильма нет'}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {!topMoviesClicked && movies.length === 0 && (
        <p className="no-movies">Введите название фильма для поиска</p>
      )}
      {topMoviesClicked && movies.length > 0 && (
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster.url} alt={movie.name} />
              <h3>{movie.name}</h3>
              <p>{movie.description || 'Описания для фильма нет'}</p>
            </div>
          ))}
        </div>
      )}
      {topMoviesClicked && movies.length === 0 && (
        <p className="no-movies">Нет фильмов ужасов</p>
      )}
    </div>
  );
};

export default Info;
