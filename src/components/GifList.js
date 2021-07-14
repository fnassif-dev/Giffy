import React, { useState, useEffect } from 'react';
import { Gif } from './Gif';
import { getGifs } from '../services/getGifs'

export const GifList = ({ keyword }) => {
    const [ loading, setLoading ] = useState(false);
    const [ gifs, setGifs ] = useState([]);

    useEffect( () => {
        setLoading(true);
        getGifs({ keyword })
            .then( gifs => {
                setGifs(gifs)
                setLoading(false);
            });
    }, [keyword]);

    if (gifs.length === 0) return <h1 className="gif__no-results"><span>No Results</span></h1>

    return (
        <>
            {
                loading &&
                <div id="loader-wrapper">
                    <div id="loader"></div>
                </div>
            }

            <div className="gif__main-gifs">
                <div className="container">
                    <div className="row">
                        {
                            gifs.map( ({ id, title, url}) => (
                                <Gif key={ id } title={ title} url={ url } />
                            ))
                        }   
                    </div>
                </div>
            </div>

        </>
    )
}