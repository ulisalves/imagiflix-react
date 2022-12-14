import React, {  useState,useEffect } from 'react';
import emitter from './utils/eventEmitter';
import CONST from './components/data/contants';

import Loading from './components/Loading';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Modal from './components/Modal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  export enum TitleType {
    Movie = 'movie',
    Serie = 'tv',
  }

  export interface Title {
    type: TitleType;
    id: number | string;
  }

const App = () => {

  const { URL, APISTRING } = CONST;

  const [ movies, setMovies ] = useState<any>();
  const [series, setSeries] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [loading, setLoading] = useState<any>(true);
  
  const getFeaturedMovie = () => movies && movies?.results[0];

  const getMovieList = () => {
    if (movies) {
      const [...movieList] = movies?.results;
      return movieList;
    }
    return [];
  };

  const getTitle = async ({ type, id }: Title) => {
      setLoading(true);
      const title = await fetch(`${'https://api.themoviedb.org/3'}/${type}/${id}${`?api_key=${'703044e6ebd5a3df77f906836fec13ec'}&language=pt-BR`}`);
      const titleData = await title.json();
      setTitle(titleData);
      setLoading(false);
  };

    useEffect(() => {
    emitter.addListener(CONST.EVENTS.PosterClick, getTitle);
    emitter.addListener(CONST.EVENTS.ModalClose, () => setTitle(undefined));

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
    }, [URL, APISTRING]);

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
                <Carousel title='S??ries Populares' data={series?.results} />
              </>
        )}
        <Footer />
        {!loading && title && <Modal {...title} />}
    </div>
  );
}

export default App;
