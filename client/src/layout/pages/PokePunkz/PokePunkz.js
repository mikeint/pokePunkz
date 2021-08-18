import React, { Component } from 'react';
import './PokePunkz.scss'

import masterList from '../../files/masterJSON/masterJSON.json';


const options = ["option1", "option2", "option3", "option4"];

class PokePunkz extends Component {
    constructor(props) {
        super(props);
        this.state={
            pokePunk: '',
        }
    }
    componentDidMount() {
        let pokeball="";
        options.forEach(option => {
            document.getElementById(option).addEventListener("click", function() {
                const pokeballs = document.getElementsByClassName("pokeball");
                for (var i = 0; i < pokeballs.length; i++) {
                        pokeball = pokeballs[i];
                    if (pokeball.parentNode.id !== option) {
                        pokeball.classList.remove("selected");
                        pokeball.parentNode.classList.add("faded");
                    } else {
                        pokeball.classList.add("selected");
                        pokeball.parentNode.classList.remove("faded");
                    }
                }
            });
        }); 
    }

    selectPokePunk = (pokePunk) => {
        this.setState({pokePunk}); 
    }

    showPokePunks = () => {
        const { pokePunk } = this.state;
        return (
            masterList.map(({image, url, attributes}, i)=> {
                return attributes[0].value===pokePunk || pokePunk==='' ? (
                    <div key={"PokePunk"+i} className="pokePunkzResultBox">
                            <div className="pokePunkzResultBoxInner">
                                <a href={url} target="_blank" rel="noreferrer">
                                    <img src={require('../../files/masterPNGS/' + image).default} alt={image} />
                                </a>
                            </div>
                        </div>
                ):''
            })
        )
    }

	render() {
		return (
            <div className="filterContainer">
                <div className="filterSelections"> 
                    <div className="option faded" onClick={() => this.selectPokePunk("Ash Hat")} id="option1">
                        <div className="pokeball unselected">
                        <div className="upper-half"> </div>
                        <div className="lower-half"> </div>
                        <div className="base"> </div>
                        <div className="inner-circle"> </div>
                        <div className="indicator visible"> </div>
                        <div className="indicator-inner"> </div>
                        </div>
                            Ash Hat
                    </div>
                    <div className="option faded" onClick={() => this.selectPokePunk("Pikachu Hat")} id="option2">
                        <div className="pokeball unselected">
                        <div className="upper-half"> </div>
                        <div className="lower-half"> </div>
                        <div className="base"> </div>
                        <div className="inner-circle"> </div>
                        <div className="indicator visible"> </div>
                        <div className="indicator-inner"> </div>
                        </div>
                            Pikachu Hat
                    </div>
                    <div className="option faded" onClick={() => this.selectPokePunk("Squirtle Hat")} id="option3">
                        <div className="pokeball unselected">
                        <div className="upper-half"> </div>
                        <div className="lower-half"> </div>
                        <div className="base"> </div>
                        <div className="inner-circle"> </div>
                        <div className="indicator visible"> </div>
                        <div className="indicator-inner"> </div>
                        </div>
                            Squirtle Hat
                    </div>
                    <div className="option faded" onClick={() => this.selectPokePunk("Jigglypuff Hat")} id="option4">
                        <div className="pokeball unselected">
                        <div className="upper-half"> </div>
                        <div className="lower-half"> </div>
                        <div className="base"> </div>
                        <div className="inner-circle"> </div>
                        <div className="indicator visible"> </div>
                        <div className="indicator-inner"> </div>
                        </div>
                            Jigglypuff Hat
                    </div>
                     
                    <button className="resetFilterBtn" onClick={this.reset}>reset</button>
                </div>

                <div className="filterResultsContainer"> 
                    <div className="resultWrap"> 
                        {this.showPokePunks()}
                    </div> 
                </div>
            </div>
		)
	}
}

export default PokePunkz