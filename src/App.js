import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Info from './components/Info';
import './styles.css';

const App = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    posterUrl: '',
    movies: [],
    topMoviesClicked: false,
  });

  const API_KEY = 'DFJ2WW3-XFFMS75-P4KH27K-3M9Y2RS';

  const gettingFilms = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const api_url = `https://api.kinopoisk.dev/v1.3/movie?token=${API_KEY}&search=${query}&field=name&limit=10`;

    try {
      const response = await axios.get(api_url);
      if (response.status !== 200) {
        throw new Error('Ошибка при получении данных');
      }
      const data = response.data.docs;
      setState({
        title: '',
        description: '',
        posterUrl: '',
        movies: data,
        topMoviesClicked: false,
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const gettingTopMovies = async (years) => {
    console.log('Функция gettingTopMovies вызвана');
    const currentYear = new Date().getFullYear();
    const api_url = `https://api.kinopoisk.dev/v1.3/movie?token=${API_KEY}&field=rating.kp&search=!null&sortField=rating.kp&sortType=-1&limit=14&year=${currentYear - years}-${currentYear}`;

    try {
      const response = await axios.get(api_url);
      if (response.status !== 200) {
        throw new Error('Ошибка при получении данных');
      }
      const data = response.data.docs;

      setState({
        title: '',
        description: '',
        posterUrl: '',
        movies: data,
        topMoviesClicked: true,
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div>
      <Header gettingFilms={gettingFilms} gettingTopMovies={gettingTopMovies} />
      <Info
        title={state.title}
        description={state.description}
        posterUrl={state.posterUrl}
        movies={state.movies}
        topMoviesClicked={state.topMoviesClicked}
      />
    </div>
  );
};

export default App;
