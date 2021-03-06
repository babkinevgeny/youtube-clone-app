import React from 'react';
import RecomendationItem from './RecomendationItem/RecomendationItem';

const Recomendations = ( {videos, recomendationClickHandler} ) => {
    if ( !videos.length ) return null;

    const items = videos.map((video) => <RecomendationItem video={video} clicked={recomendationClickHandler}/>);
    return (
        <>
            {items}
        </>
    )
}

export default Recomendations;
