import React, {useState, useEffect, useRef} from 'react';
import {InputValue} from './Input'
import {Requests} from "./Requests";
import {PopularCurrencies} from "./PopularCurrencies";
import {Graph} from "./Graph";
import {Bitcoin} from './BitcoinInfo'
import BY_flag from '../img/by.png';
import {BitcoinGraph} from './BitcoinGraph';
import classes from './Main.module.css';
import graph from '../img-app/top-graph.svg'


export const Main = () =>{

    const CLASSES = {
        TOP: classes.top,
        TOP_CONTENT: classes.top_content,
        TOP_CONTENT_GREETING_GRAPH: classes.top_content_greeting_graph,
        TOP_CONTENT_GREETING: classes.top_content_greeting,
        TOP_CONTENT_GRAPH: classes.top_content_graph
    }

    const [currencyDefault, setCurrencyDefault] = useState("BYN");

    const [currentCountry, setCurrentCountry] = useState("Belarus");

    const [currencyName, setCurrencyName] = useState("New Belarusian ruble");

    const [bitcoin, setBitcoin] = useState([]);

    const [bitcoinRateUSD, setBitcoinRateUSD] = useState(0);

    const [bitcoinFirstRate, setBitcoinFirstRate] = useState(0);

    const [usd, setUSD] = useState(null);

    const [eur, setEUR] = useState(null);

    const [gbp, setGBP] = useState(null);

    const [aud, setAUD] = useState(null);

    const [cad, setCAD] = useState(null);

    const [chf, setCHF] = useState(null);

    const [flag, setFlag] = useState(BY_flag);

    useEffect(
        () => {
            const req = new Requests();

            req.GetRateForUSDEUR(currencyDefault).then(result =>{
                if(result === "Online Services Temporarily unavailable"){
                    setUSD(result);
                    setEUR(result);
                }else {
                    setUSD(result.results[`USD_${currencyDefault}`].val);
                    setEUR(result.results[`EUR_${currencyDefault}`].val);
                }
            });

            req.GetRateForGBPRUB(currencyDefault).then(result =>{
                if(result === "Online Services Temporarily unavailable"){
                    setUSD(result);
                    setEUR(result);
                }else {
                    setGBP(result.results[`GBP_${currencyDefault}`].val);
                    setAUD(result.results[`AUD_${currencyDefault}`].val);
                }
            });

            req.GetRateForCNYJPY(currencyDefault).then(result =>{
                if(result === "Online Services Temporarily unavailable"){
                    setUSD(result);
                    setEUR(result);
                }else {
                    setCAD(result.results[`CAD_${currencyDefault}`].val);
                    setCHF(result.results[`CHF_${currencyDefault}`].val);
                }
            });

        },[currencyDefault]
    )

return(
    <div className = "container">
        <div className  = {CLASSES.TOP}>
            <div className = {CLASSES.TOP_CONTENT}>
                <div className = {CLASSES.TOP_CONTENT_GREETING_GRAPH}>
                    <div className = {CLASSES.TOP_CONTENT_GREETING}>
                        <h1>Hey!<br/> I want to help you keep track<br/>of the current exchange rate</h1>
                    </div>
                    <div className = {CLASSES.TOP_CONTENT_GRAPH}>
                        <img src = {graph}/>
                    </div>
                </div>
            </div>
        </div>
        <div className = "main-info">
            <div>Bitcoin Rate</div>
                <Bitcoin bitcoin = {bitcoin} setBitcoin = {setBitcoin} setBitcoinRateUSD = {setBitcoinRateUSD} setBitcoinFirstRate = {setBitcoinFirstRate}/>
                <BitcoinGraph bitcoin = {bitcoin} setBitcoin = {setBitcoin} bitcoinRateUSD = {bitcoinRateUSD} bitcoinFirstRate = {bitcoinFirstRate}/>
            <div className  = {"main-info__current-currency"}>
                <h1>current currency  {currentCountry} {currencyName} {currencyDefault}</h1>
                <img src = {flag}/>
            </div>
        </div>
        <div>
            <InputValue setCurrency = {setCurrencyDefault} setCurrentCountry={setCurrentCountry} setCurrencyName = {setCurrencyName}setFlag={setFlag}/>
        </div>
        <div>
            <PopularCurrencies usd = {usd} eur = {eur} gbp = {gbp} aud = {aud} cad = {cad} chf = {chf} flag={flag}/>
        </div>
        <div>
            <Graph usd = {usd} eur = {eur} gbp = {gbp} aud = {aud} cad = {cad} chf = {chf}/>
        </div>
    </div>
);
}
