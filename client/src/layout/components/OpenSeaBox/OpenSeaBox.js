
import React, { Component } from "react"
import { Link } from "react-router-dom" 
import './OpenSeaBox.scss'
 
class OpenSeaBox extends Component {

    render() {    
        return (
            <div className="OpenSeaBoxContainer">  
                <a href="https://opensea.io/collection/pokepunkz" className="openseaBtn mainButton" target="_blank"> 
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



