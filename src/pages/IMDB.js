import React from 'react'
import { Route } from "react-router-dom";
import IMDBComponents from '../components/IMDBFiles/IMDBComponents';
const IMDB = () => {
    return (
        <section>
        <h1>welcome page</h1>
        <Route path="/imdb">
            <IMDBComponents />
        </Route>
            
        </section>
    )
}

export default IMDB
