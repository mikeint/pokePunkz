import React, { useState } from 'react'
import './BuildPokePunkBox.scss'
import firstEdImg from '../../files/images/examples/1st-r.png'
const BuildPokePunkBox = ({image, external_url, attributes}) => {

    const [displayStats, setDisplayStats] = useState(false)


    const getBarWidth = (val) => {
        return `${(val/3)}px`
    }
    const getBarColor = (val) => {
        console.log(val)
        if (val > 375) return "#58ced4";
        if (val > 300 && val < 375) return "#69b34c";
        if (val > 250 && val < 300) return "#fbc150";
        if (val > 200 && val < 250) return "#ff8e15";
        if (val < 200 ) return "#ff0d0d";
    }
 
    return <span className="pokePunkStatContainer">
            <img onClick={() => setDisplayStats(!displayStats)} src={external_url} alt={image} /> 
            <span onClick={() => setDisplayStats(!displayStats)} className={"statContainer " + (displayStats ? "" : "statContainerOff")}>
                <div className="stat statName">{attributes[0].value}</div>  
                {attributes[5].trait_type && <img className="firstEdImg" src={firstEdImg} alt={"firstEdImg"} />} 
 
                <div className="statChartContainer">
                    <div className="statTitles">
                        <div className="stat">{attributes[1].trait_type}</div> 
                        <div className="stat">{attributes[2].trait_type}</div> 
                        <div className="stat">{attributes[3].trait_type}</div> 
                        <div className="stat">{attributes[4].trait_type}</div> 
                    </div>

                    <div className="statValues">
                        <div className="stat statBars" style={{width: getBarWidth(attributes[1].value), background: getBarColor(attributes[1].value)}}>{attributes[1].value}</div>  
                        <div className="stat statBars" style={{width: getBarWidth(attributes[2].value), background: getBarColor(attributes[2].value)}}>{attributes[2].value}</div> 
                        <div className="stat statBars" style={{width: getBarWidth(attributes[3].value), background: getBarColor(attributes[3].value)}}>{attributes[3].value}</div> 
                        <div className="stat statBars" style={{width: getBarWidth(attributes[4].value), background: getBarColor(attributes[4].value)}}>{attributes[4].value}</div>
                    </div>

                </div>
 
            </span>
        </span>
}

export default BuildPokePunkBox