import React from 'react';
import { Movie } from './data/mock';

const Poster = ({cover, title, score}: Movie, index: number) => (
    <article key={index}>
        <img src={cover} alt={title} />
    </article>
);

export default Poster;