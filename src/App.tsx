import React, {  useState,useEffect } from 'react';
import CONST from './components/data/contants';

import Loading from './components/Loading';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel'
import Footer from './components/Footer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {

  const { URL, APISTRING } = CONST;

  const [ movies, setMovies ] = useState<any>();
  const [series, setSeries] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesData = await movies.json();
      setMovies(moviesData);

      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesData = await series.json();
      setSeries(seriesData);

      setLoading(false);
    }
      fetchData();
    }, []);

  // useEffect(() => (movies && series) && console.log(movies, series), [ movies, series ])

  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [featured, ...movieList] = movies?.results;
      return movieList;
    }
    return [];
  };

  //const [featured, ...movieList] = movies?.results;

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}
        {!loading && (
              <>
                <Hero {...getFeaturedMovie()}/>
                <NavBar />
                <Carousel title='Filmes Populares' data={getMovieList()} />
                <Carousel title='Séries Populares' data={series?.results}/>
                <Carousel title='placeholder' />
              </>
        )}
        <Footer />
    </div>
  );
}

export default App;
