import React, { useEffect } from "react";
import './search.css'
import imdb from '../../imdb.png';
import rotten from '../../rotten.png';

function Search(props) {
    const [searchResult, setSearchResult] = React.useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=2b1f693d67555b3bc4bc31399d43443b&language=en-US&query=${props.search}`)
            .then(response => response.json())
            .then(data => {
                const bestMovies = data.results
                setSearchResult(bestMovies);
            })
    }, [props.search])
    return (
        <div className="featured container">
            <div
                className="moviess-list row"
            >
                {
                    searchResult.map(movie => (
                        <div className="movies" key={movie.id}>
                            <div className='favorite' onClick={(event) => props.addToFavourite(event,movie)}>
                                <div className='eclipse'><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Ellipse 3" filter="url(#filter0_b_1327_248)">
                                        <ellipse cx="15" cy="15.1842" rx="15" ry="14.6053" fill="#ffffff" fill-opacity="1" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_1327_248" x="-2" y="-1.42105" width="34" height="33.2105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1327_248" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1327_248" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                </div>
                                <div className='heart'>
                                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Heart">
                                            <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z" fill="#D1D5DB" />
                                        </g>
                                    </svg>

                                </div>
                            </div>
                            <div className="posters">
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                            </div>
                            <div className="details">
                                <p className="date">{`USA, ${movie.release_date}`}</p>
                                <p className="title">{movie.original_title}</p>
                                <div className="rating">
                                    <div className="imdb">
                                        <img src={imdb} />
                                        <p>{`${movie.vote_average.toFixed(1)}/10`}</p>
                                    </div>
                                    <div className="rotten">
                                        <img src={rotten} />
                                        <p>{`${movie.vote_average.toFixed(1) * 10}%`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;