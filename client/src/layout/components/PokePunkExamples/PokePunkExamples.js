import React from "react"
import './PokePunkExamples.scss'

import s1 from '../../files/images/examples/s1.png'
import s2 from '../../files/images/examples/s2.png'
import s3 from '../../files/images/examples/s3.png'
import s4 from '../../files/images/examples/s4.png'
import s5 from '../../files/images/examples/s5.png' 
import s6 from '../../files/images/examples/s6.png'
import s7 from '../../files/images/examples/s7.png'
import s8 from '../../files/images/examples/s8.png'

const PokePunkExamples = () => 
    <div className="pokePunkExamplesWrap"> 
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s4} alt={"s4"}/> 
            </div>
        </div>
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s3} alt={"s3"}/> 
            </div>
        </div>
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s1} alt={"s1"}/> 
            </div>
        </div>  
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s5} alt={"s5"}/> 
            </div>
        </div>
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s8} alt={"s8"}/> 
            </div>
        </div> 
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s6} alt={"s6"}/> 
            </div>
        </div>
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s2} alt={"s2"}/> 
            </div>
        </div>
        <div className="pokePunkExamplesBox">
            <div className="pokePunkExamplesBoxInner">
                <img src={s7} alt={"s7"}/> 
            </div>
        </div>
    </div> 

export default PokePunkExamples;

