import React, { Component } from 'react';
import './PokePunks.scss'

import masterList from '../../files/masterJSON/masterJSON.json';

class PokePunks extends Component {
    constructor(props) {
        super(props);
        this.state={
            filterArray: [
                { name: "accState", value: "" },
                { name: "backwearState", value: "" },
                { name: "bodyState", value: "" },
                { name: "chestState", value: "" },
                { name: "galaxyState", value: "" },
                { name: "headwearState", value: "" },
                { name: "speciesState", value: "" },
            ]
        }
    }

    change = (e) => {
        const { filterArray } = this.state;
        const target = e.target;
        const arrCopy = [...filterArray]

        arrCopy.forEach((filter)=>{
            if(filter.name === target.name) filter.value = target.value;
        })
        this.setState({filterArray: arrCopy})
    }

    reset = () => {
        this.setState({
            filterArray: [
                { name: "accState", value: "" },
                { name: "backwearState", value: "" },
                { name: "bodyState", value: "" },
                { name: "chestState", value: "" },
                { name: "galaxyState", value: "" },
                { name: "headwearState", value: "" },
                { name: "speciesState", value: "" },
            ]
        })
    }

    showAliens = () => {
        const { filterArray } = this.state;
        return (
            masterList.map(({attributes, image, name, url}, index)=> {
                const attributeValues = attributes.map(a=>a.value)
                if(filterArray.every(({value})=>attributeValues.includes(value) || value === "" || name === value))
                    return <div key={index} className="pokePunkResultBox">
                        <div className="pokePunkResultBoxInner">
                            <a href={url} target="_blank" rel="noreferrer">
                                <img src={require('../../files/masterPNGS/' + image).default} alt={image} /> 
                            </a>
                        </div>
                    </div>
                else 
                    return ""
            })
        )
    }

    checkFilterValue = (i, val) => {
        const { filterArray } = this.state;
        return filterArray[i].value === "" ? val : filterArray[i].value
    }
 
	render() {
		return (
            <div className="filterContainer">
                <div className="filterSelections">
                    <select
                        className={'filterBtn '+ this.checkFilterValue(6, "filterSelected")}
                        name={"speciesState"}
                        onChange={this.change}
                        value={this.checkFilterValue(6, "SPECIES")}
                    >
                        <option value={this.checkFilterValue(6, "SPECIES")} hidden>{this.checkFilterValue(6, "SPECIES")}</option>
                        <option value="Martian (x)">Martian (X)</option>
                        <option value="Martian (y)">Martian (Y)</option>
                        <option value="Nordik (x)">Nordik (X)</option>
                        <option value="Nordik (y)">Nordik (Y)</option>
                        <option value="Sirian (x)">Sirian (X)</option>
                        <option value="Sirian (y)">Sirian (Y)</option> 
                        <option value="Talls (x)">Talls (X)</option> 
                        <option value="Talls (y)">Talls (Y)</option> 
                    </select>

                    <select
                        className={'filterBtn '+this.checkFilterValue(0, "filterSelected")}
                        name={"accState"}
                        onChange={this.change}
                        value={this.checkFilterValue(0, "WEAPONS")}
                    >
                        <option value={this.checkFilterValue(0, "WEAPONS")} hidden>{this.checkFilterValue(0, "WEAPONS")}</option>
                        <option value="Crypto Cannon">Crypto Cannon</option>
                        <option value="Gold Lazer Gun">Gold Lazer Gun</option>
                        <option value="Dagger">Dagger</option>
                        <option value="Lazer Gun">Lazer Gun</option>
                        <option value="Galactic Cannon">Galactic Cannon</option>
                        <option value="Shotgun">Shotgun</option> 
                    </select>

                    <select
                        className={'filterBtn '+this.checkFilterValue(1, "filterSelected")}
                        name={"backwearState"}
                        onChange={this.change}
                        value={this.checkFilterValue(1, "BACK WEAR")}
                    >
                        <option value={this.checkFilterValue(1, "BACK WEAR")} hidden>{this.checkFilterValue(1, "BACK WEAR")}</option>
                        <option value="Gold Sword">Gold Sword</option>
                        <option value="Gold Wings">Gold Wings</option>
                        <option value="White Wings">White Wings</option>
                        <option value="Gold Jetpack">Gold Jetpack</option>
                        <option value="Wings">Wings</option>
                        <option value="Jetpack">Jetpack</option>
                        <option value="White Jetpack">White Jetpack</option>
                        <option value="Black Jetpack">Black Jetpack</option>
                        <option value="Axe">Axe</option>
                        <option value="Double Sword">Double Sword</option>
                        <option value="Sword">Sword</option>
                        <option value="Gold Double Sword">Gold Double Sword</option>
                    </select>

                    <select
                        className={'filterBtn '+this.checkFilterValue(2, "filterSelected")}
                        name={"bodyState"}
                        onChange={this.change}
                        value={this.checkFilterValue(2, "BODY")}
                    >
                        <option value={this.checkFilterValue(2, "BODY")} hidden>{this.checkFilterValue(2, "BODY")}</option>
                        <option value="Aqua">Aqua</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Grey">Grey</option>
                        <option value="Orange">Orange</option>
                        <option value="Pink">Pink</option>
                        <option value="Purple">Purple</option>
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Yellow">Yellow</option>
                    </select>

                    <select
                        className={'filterBtn '+this.checkFilterValue(3, "filterSelected")}
                        name={"chestState"}
                        onChange={this.change}
                        value={this.checkFilterValue(3, "CHEST")}
                    >
                        <option value={this.checkFilterValue(3, "CHEST")} hidden>{this.checkFilterValue(3, "CHEST")}</option>
                        <option value="Black Armor">Black Armor</option>
                        <option value="Gold Armor">Gold Armor</option>
                        <option value="White Armor">White Armor</option>
                        <option value="Red Vest">Red Vest</option>
                        <option value="Purple Vest">Purple Vest</option>
                        <option value="Blue Vest">Blue Vest</option>
                        <option value="Green Vest">Green Vest</option>
                    </select>

                    <select
                        className={'filterBtn '+this.checkFilterValue(4, "filterSelected")}
                        name={"galaxyState"}
                        onChange={this.change}
                        value={this.checkFilterValue(4, "GALAXY")}
                    >
                        <option value={this.checkFilterValue(4, "GALAXY")} hidden>{this.checkFilterValue(4, "GALAXY")}</option>
                        <option value="Andromeda">Andromeda</option>
                        <option value="Blackhole">Blackhole</option>
                        <option value="Cartwheel">Cartwheel</option>
                        <option value="Cigar">Cigar</option>
                        <option value="Elliptical">Elliptical</option>
                        <option value="Leo">Leo</option>
                        <option value="Sombrero">Sombrero</option>
                        <option value="Spiral">Spiral</option>
                        <option value="Milky Way">Milky Way</option>
                        <option value="Sunflower">Sunflower</option>
                    </select>

                    <select
                        className={'filterBtn '+this.checkFilterValue(5, "filterSelected")}
                        name={"headwearState"}
                        onChange={this.change}
                        value={this.checkFilterValue(5, "HEAD WEAR")}
                    >
                        <option value={this.checkFilterValue(5, "HEAD WEAR")} hidden>{this.checkFilterValue(5, "HEAD WEAR")}</option>
                        <option value="Enemy Tracker">Enemy Tracker</option>
                        <option value="Gold Green Lazer Optics">Gold Green Lazer Optics</option>
                        <option value="Gold Red Lazer Optics">Gold Red Lazer Optics</option>
                        <option value="Gold Green Mono Optic">Gold Green Mono Optic</option>
                        <option value="Gold Red Mono Optic">Gold Red Mono Optic</option>
                        <option value="Blue Mono Optic">Blue Mono Optic</option>
                        <option value="Green Mono Optic">Green Mono Optic</option>
                        <option value="Red Mono Optic">Red Mono Optic</option>
                        <option value="Green Lazer Optics">Green Lazer Optics</option>
                        <option value="Red Lazer Optics">Red Lazer Optics</option>
                        <option value="Blue Lazer Optics">Blue Lazer Optics</option>
                    </select>
                     
                    <button className="resetFilterBtn" onClick={this.reset}>reset</button>
                </div>

                <div className="filterResultsContainer"> 
                    <div className="resultWrap"> 
                        {this.showAliens()}
                    </div> 
                </div>


            </div>
		)
	}
}

export default PokePunks