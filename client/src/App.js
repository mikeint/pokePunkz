import React from "react";
import './App.scss';
import { Route, BrowserRouter } from "react-router-dom";
import Landing from './layout/pages/Landing/Landing';  
import LandingRouter from './layout/LandingRouter'

const App = () => 
    <BrowserRouter>
        <> 
            <Route exact path="/" component={Landing} />  
            <Route exact path="/pokePunks" component={LandingRouter} />
        </>
    </BrowserRouter> 

export default App;

