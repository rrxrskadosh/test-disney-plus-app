import React from 'react';

import DisneyCategory from './DisneyCategory';
import MarvelCategory from './MarvelCategory';
import PixarCategory from './PixarCategory';

import '../ContentCategory/contentCategory.css'
import { Link } from "react-router-dom"

const ContentCategory = () => {
    return(
        <div className="container-categories">
            <h4 className="Title">Recommends of Disney</h4>
            <Link to='/content-details'>
                <DisneyCategory />
            </Link>
            <h4 className="Title">News in Marvel</h4>
            <Link to='/content-details'>
                <MarvelCategory />
            </Link>
            <h4 className="Title">Originals Pixar</h4>
            <Link to='/content-details'>
                <PixarCategory />
            </Link>
        </div>
    )
}

export default ContentCategory;