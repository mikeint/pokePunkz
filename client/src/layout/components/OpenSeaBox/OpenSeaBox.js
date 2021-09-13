import React, { Component } from "react" 
import './OpenSeaBox.scss' 
import packs_og from '../../files/images/packs_og.png';

class OpenSeaBox extends Component {

    render() {    
        return (
            <div className="OpenSeaBoxContainer">  
                <a href="https://opensea.io/collection/pokepunkz" 
                    className="openseaBtn mainButton" 
                    target="_blank" 
                    rel="noreferrer"
                    data-aos="zoom-in-down" data-aos-delay="100"
                > 
                    <div className="hover">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    BUY ON OPENSEA
                </a>
                <img className="packs_og" src={packs_og} alt="packs_og" />
            </div>
        )
    }
}

export default OpenSeaBox;



