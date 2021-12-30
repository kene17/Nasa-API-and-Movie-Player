import React from 'react'
import { Route } from "react-router-dom";
import NasaComponents from '../components/NasaFiles/NasaComponents';
const Nasa = () => {
    return (
        <div>
        <h1>welcome page</h1>
        <Route path="/nasa">
            <NasaComponents />
        </Route>
            
        </div>
    )
}

export default Nasa
