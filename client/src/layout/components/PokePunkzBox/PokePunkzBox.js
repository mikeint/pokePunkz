
import React, { Component } from "react" 
import './PokePunkzBox.scss'
 
class PokePunkzBox extends Component {

    render() {    
        return (
            <div className="pokePunkzBoxContainer">  
                <a href="/pokePunkz" className="pokePunkzBtn mainButton" rel="noreferrer" data-aos="zoom-in-down" data-aos-delay="100"> 
                    <div className="hover">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    SEE COLLECTION
                </a> 
            </div> 
        )
    }
}

export default PokePunkzBox;



