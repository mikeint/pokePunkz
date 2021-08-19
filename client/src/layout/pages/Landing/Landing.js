import React, { Component } from "react" 
import './Landing.scss'
import PokePunkExamples from "../../components/PokePunkExamples/PokePunkExamples" 
import RoadMap from "../../components/RoadMap/RoadMap" 
import AnimatedHero from "../../components/AnimatedHero/AnimatedHero" 
import Bio from "../../components/Bio/Bio" 
import Footer from "../../components/Footer/Footer"
import TopButtons from "../../components/TopButtons/TopButtons"
import Socials from "../../components/Socials/Socials" 
import OpenSeaBox from "../../components/OpenSeaBox/OpenSeaBox" 

class Landing extends Component {
    render() {
        return (
            <> 
                <Socials />
                <AnimatedHero />
                <TopButtons />
                <div className="homeBodyContainer">
                    <PokePunkExamples />
                    <Bio />
                    <OpenSeaBox />
                    <RoadMap />
                    <Footer />
                </div>
            </> 
        );
    }
}

export default Landing;