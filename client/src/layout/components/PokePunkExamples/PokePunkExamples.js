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
        <img src={s4} alt={"s4"}/>
        <img src={s3} alt={"s3"}/>
        <img src={s6} alt={"s6"}/>
        <img src={s1} alt={"s1"}/>
        <img src={s8} alt={"s8"}/>
        <img src={s2} alt={"s2"}/>
        <img src={s7} alt={"s7"}/>
        <img src={s5} alt={"s5"}/>
    </div>

export default PokePunkExamples;

