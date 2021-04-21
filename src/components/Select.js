import React, {useState, useEffect, useRef} from 'react';
import {InputValue} from './Input'
import {Requests} from "./Requests";
import {PopularCurrencies} from "./PopularCurrencies";
import BY_flag from '../img/by.png';

export const SelectForm = () =>{

    const [currencyDefault, setCurrencyDefault] = useState("BYN");

    const [currentCountry, setCurrentCountry] = useState("Belarus");

    const [currencyName, setCurrencyName] = useState("New Belarusian ruble")

    const [usd, setUSD] = useState(null);

    const [eur, setEUR] = useState(null);

    const [gbp, setGBP] = useState(null);

    const [rub, setRUB] = useState(null);

    const [cny, setCNY] = useState(null);

    const [jpy, setJPY] = useState(null);

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

            // req.GetRateForGBPRUB(currencyDefault).then(result =>{
            //     setGBP(result.results[`GBP_${currencyDefault}`].val);
            //     setRUB(result.results[`RUB_${currencyDefault}`].val);
            // });
            //
            // req.GetRateForCNYJPY(currencyDefault).then(result =>{
            //     setCNY(result.results[`CNY_${currencyDefault}`].val);
            //     setJPY(result.results[`JPY_${currencyDefault}`].val);
            // });

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
        <PopularCurrencies usd = {usd} eur = {eur} gbp = {gbp} rub = {rub} cny = {cny} jpy = {jpy} flag={flag}/>

    </div>
);
}
