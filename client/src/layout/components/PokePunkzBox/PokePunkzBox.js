
import React, { Component } from "react" 
import './PokePunkzBox.scss'
 
class PokePunkzBox extends Component {

    render() {    
        return (
            <div className="pokePunkzBoxContainer">  
                <a href="/pokePunkz" className="pokePunkzBtn mainButton" rel="noreferrer"> 
                    <div className="hover">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    See Collection
                </a> 
            </div> 
        )
    }
}

export default PokePunkzBox;



