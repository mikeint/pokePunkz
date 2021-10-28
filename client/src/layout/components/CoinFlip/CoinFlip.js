import React from "react"
import './CoinFlip.scss'

class CoinFlip extends React.Component { 

    componentDidMount() {
        const coin = document.querySelector('#coin');
        const button = document.querySelector('#flip');
        const status = document.querySelector('#status');
        const heads = document.querySelector('#headsCount');
        const tails = document.querySelector('#tailsCount');
        const coinContainer = document.querySelector('#coinContainer'); 

        let headsCount = 0;
        let tailsCount = 0;

        const deferFn = (callback, ms) => {
            setTimeout(callback, ms); 
        }

        const processResult = (result) => {
            if (result === 'heads') {
            headsCount++;
            heads.innerText = headsCount;
            } else {
            tailsCount++;
            tails.innerText = tailsCount;
            }
            coinContainer.setAttribute('class', '');
            button.setAttribute('class', 'flipBtn mainButton aos-init aos-animate');
            status.innerText = result.toUpperCase();
        }

        const flipCoin = () => {
            coinContainer.setAttribute('class', 'moveCoin');
            button.setAttribute('class', 'inFlip flipBtn mainButton aos-init aos-animate');
            coin.setAttribute('class', '');
            const random = Math.random();
            const result = random < 0.5 ? 'heads' : 'tails';
            deferFn(function() {
                coin.setAttribute('class', 'animate-' + result);
                deferFn(processResult.bind(null, result), 2900);
            }, 100);
        }

        button.addEventListener('click', flipCoin);
    }

 
    render() {
        return (
            <div className="coinFlipContainer">
                
                <div id="coinContainer" className="">  
                    <div id="coin" className=''>
                        <div id="heads" className="heads"></div>
                        <div id="tails" className="tails"></div>
                    </div>
                </div>
 
                <div id="flip" className="flipBtn mainButton" rel="noreferrer" data-aos="zoom-in-down"> 
                    <div className="hover">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    FLIP
                </div> 
                <p>Heads: <span id="headsCount">0</span> Tails: <span id="tailsCount">0</span></p>
                <p><span id="status">-----</span></p> 
            </div> 
        )
    }
}

export default CoinFlip;



