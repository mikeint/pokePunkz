import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'

import PokePunkz from './pages/PokePunkz/PokePunkz'

function LandingRouter({ match }) {
    return ( 
        <> 
            <NavBar />
            <Switch> 
                <Route exact path="/pokePunkz" component={PokePunkz} />
            </Switch> 
        </>
    );
}

export default LandingRouter;

