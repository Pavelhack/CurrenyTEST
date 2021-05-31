import React, {useState, useEffect} from 'react';
import { useHistory }  from "react-router-dom";
import {InputCurrencies} from './InputCurrencies'
import {Requests} from "./Requests";
import {PopularCurrencies} from "./TableCurrencies";
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
        TOP_CONTENT_BTNS: classes.top_content_btns,
        TOP_CONTENT_BTNS_SHOW: classes.top_content_btns_show,
        TOP_CONTENT_BTNS_OPEN: classes.top_content_btns_open,
        TOP_CONTENT_GRAPH: classes.top_content_graph,
        CURRENT_CURRENCY: classes.current_currency,
        CURRENT_CURRENCY_CONTENT: classes.current_currency_content,
        CURRENT_CURRENCY_TITLE: classes.current_currency_title,
        CURRENT_CURRENCY_FLAG: classes.current_currency_flag,
        CURRENT_CURRENCY_FLAG_IMG : classes.current_currency_flag_img,
        CURRENT_CURRENT_CURRENCY_INPUT: classes.current_currency_input,
        CURRENT_CURRENT_CURRENCY_TABLE: classes.current_currency_table,
        CURRENT_CURRENCY_TABLE_TABLE: classes.current_currency_table,
        CURRENT_CURRENCY_TABLE_COLUMN: classes.current_currency_table_column,
        CURRENT_CURRENCY_TABLE_ROWS: classes.current_currency_table_rows,
        CURRENT_CURRENCY_GRAPH: classes.current_currency_graph
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

    const showFun = () =>{
        
        console.log("Show me more")
        
    }

    const History = useHistory();

    const converter = () =>{

        History.push("/InfoRate");

    }

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
            <div className = "block_1136">
                <div className = {CLASSES.TOP_CONTENT}>
                    <div className = {CLASSES.TOP_CONTENT_GREETING_GRAPH}>
                        <div className = {CLASSES.TOP_CONTENT_GREETING}>
                            <h1>Hey!<br/> I want to help you keep track<br/>of the current exchange rate</h1>
                            <p>It’s an easy clean app for tracking the state of the world exchange<br/> rate, also you can check bitkoin state in real time.<br/><br/> Check all informaation or use the currency converter</p>
                            <div className = {CLASSES.TOP_CONTENT_BTNS}>
                                <button className = {CLASSES.TOP_CONTENT_BTNS_SHOW} onClick = {showFun}>Show me more</button>
                                <button className = {CLASSES.TOP_CONTENT_BTNS_OPEN} onClick = {converter}>Open converter</button>
                            </div>
                        </div>
                        <div className = {CLASSES.TOP_CONTENT_GRAPH} >
                            <img src = {graph}/>
                        </div>
                    </div>
                </div>
            </div>    
        </div>

        <div className = {CLASSES.CURRENT_CURRENCY}>
            <div className = "block_1136">
                <div className = {CLASSES.CURRENT_CURRENCY_CONTENT}>
                    <div className  = {CLASSES.CURRENT_CURRENCY_TITLE}>
                                <h1>Current exchange rate in  {currentCountry}</h1>
                                <div className = {CLASSES.CURRENT_CURRENCY_FLAG} /* style = {{backgroundImage : `url(${flag})`}} */>
                                    <img src = {flag} className = {CLASSES.CURRENT_CURRENCY_FLAG_IMG}/>
                                </div>
                    </div>
                    <div className = {CLASSES.CURRENT_CURRENT_CURRENCY_INPUT}>
                        <InputCurrencies setCurrency = {setCurrencyDefault} setCurrentCountry={setCurrentCountry} setCurrencyName = {setCurrencyName} setFlag={setFlag}/>
                    </div>
                    <div className = {CLASSES.CURRENT_CURRENT_CURRENCY_TABLE}>
                        <PopularCurrencies usd = {usd} eur = {eur} gbp = {gbp} aud = {aud} cad = {cad} chf = {chf} flag={flag}/>
                    </div>
                    <div className = {CLASSES.CURRENT_CURRENCY_GRAPH}>
                        <Graph usd = {usd} eur = {eur} gbp = {gbp} aud = {aud} cad = {cad} chf = {chf}/>
                    </div>
                </div>
            </div>    
        </div>

        <div className = "main-info">
            <div>Bitcoin Rate</div>
                <Bitcoin bitcoin = {bitcoin} setBitcoin = {setBitcoin} setBitcoinRateUSD = {setBitcoinRateUSD} setBitcoinFirstRate = {setBitcoinFirstRate}/>
                <BitcoinGraph bitcoin = {bitcoin} setBitcoin = {setBitcoin} bitcoinRateUSD = {bitcoinRateUSD} bitcoinFirstRate = {bitcoinFirstRate}/>
            
        </div>
        
    </div>
);
}
