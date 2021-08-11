import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'

import PokePunks from './pages/PokePunks/PokePunks'

function LandingRouter({ match }) {
    return ( 
        <> 
            <NavBar />
            <Switch> 
                <Route exact path="/pokePunks" component={PokePunks} />
            </Switch> 
        </>
    );
}

export default LandingRouter;

