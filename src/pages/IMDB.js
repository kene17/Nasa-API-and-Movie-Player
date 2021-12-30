import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
const IMDB = () => {
    return (
        <section>
        <h1>welcome page</h1>
        <Route path="/imdb">
            <p>Welcome, new movie user</p>
        </Route>
            
        </section>
    )
}

export default IMDB
