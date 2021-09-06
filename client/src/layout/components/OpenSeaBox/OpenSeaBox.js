import React, { Component } from "react" 
import './OpenSeaBox.scss' 

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
            </div> 
        )
    }
}

export default OpenSeaBox;



