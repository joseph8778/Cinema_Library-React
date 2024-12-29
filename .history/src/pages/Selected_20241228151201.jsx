import React from 'react';
import { useParams } from 'react-router-dom';

const Selected = () => {
const {movieId} = useParams();

    const selectedResults = async (id) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=da77d71e&i=${movieId}`)
        const data = await response.json()
    }

    return (
        <h1>
            Movie {movieId} Selected!
        </h1>
    );
}

export default Selected;