import React, { useState } from 'react'
import './BuildPokePunkBox.scss'

const BuildPokePunkBox = ({image, external_url, attributes}) => {

    const [displayStats, setDisplayStats] = useState(false)

    return <span className="pokePunkStatContainer">
            <img onClick={() => setDisplayStats(!displayStats)} src={external_url} alt={image} /> 
            <span onClick={() => setDisplayStats(!displayStats)} className={"statContainer " + (displayStats ? "" : "statContainerOff")}>
                <div className="stat stat1">{attributes[0].value}</div> 
                <div className="stat">{attributes[1].trait_type +" : "+ attributes[1].value}</div> 
                <div className="stat">{attributes[2].trait_type +" : "+ attributes[2].value}</div> 
                <div className="stat">{attributes[3].trait_type +" : "+ attributes[3].value}</div> 
                <div className="stat">{attributes[4].trait_type +" : "+ attributes[4].value}</div> 
            </span>
        </span>
}

export default BuildPokePunkBox