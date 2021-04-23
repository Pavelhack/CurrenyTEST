import React, {useState, useEffect, useRef} from 'react';
import {InputValue} from './Input'
import {Requests} from "./Requests";
import {PopularCurrencies} from "./PopularCurrencies";
import {Graph} from "./Graph";
import BY_flag from '../img/by.png';

export const SelectForm = () =>{

    const [currencyDefault, setCurrencyDefault] = useState("BYN");

    const [currentCountry, setCurrentCountry] = useState("Belarus");

    const [currencyName, setCurrencyName] = useState("New Belarusian ruble")

    const [usd, setUSD] = useState(null);

    const [eur, setEUR] = useState(null);

    const [gbp, setGBP] = useState(null);

    const [aud, setAUD] = useState(null);

    const [cad, setCAD] = useState(null);

    const [chf, setCHF] = useState(null);

    const [flag, setFlag] = useState(BY_flag)

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
    <div>
        <div className = "info">
            <div>
                <h1>current currency  {currentCountry} {currencyName} {currencyDefault}</h1>
                <img src = {flag}/>
            </div>
        </div>
        <div>
            <InputValue setCurrency = {setCurrencyDefault} setCurrentCountry={setCurrentCountry} setCurrencyName = {setCurrencyName}setFlag={setFlag}/>
        </div>
        <PopularCurrencies usd = {usd} eur = {eur} gbp = {gbp} aud = {aud} cad = {cad} chf = {chf} flag={flag}/>
        <Graph usd = {usd} eur = {eur} gbp = {gbp} aud = {aud} cad = {cad} chf = {chf}/>

    </div>
);
}
