import React, {useState, useEffect, useRef} from 'react';
import {InputValue} from './Input'
import {Requests} from "./Requests";
import {PopularCurrencies} from "./PopularCurrencies";

export const SelectForm = () =>{

    const [currencyDefault, setCurrencyDefault] = useState("BYN");

    const [usd, setUSD] = useState(null);

    const [eur, setEUR] = useState(null);

    const [gbp, setGBP] = useState(null);

    const [rub, setRUB] = useState(null);

    const [cny, setCNY] = useState(null);

    const [jpy, setJPY] = useState(null);

    const [flag, setFlag] = useState('')

    useEffect(
        () => {
            const req = new Requests();

            req.GetRateForUSDEUR(currencyDefault).then(result =>{
                setUSD(result.results[`USD_${currencyDefault}`].val);
                setEUR(result.results[`EUR_${currencyDefault}`].val);
            });

            req.GetRateForGBPRUB(currencyDefault).then(result =>{
                console.log(result.results)
                setGBP(result.results[`GBP_${currencyDefault}`].val);
                setRUB(result.results[`RUB_${currencyDefault}`].val);
            });

            req.GetRateForCNYJPY(currencyDefault).then(result =>{
                setCNY(result.results[`CNY_${currencyDefault}`].val);
                setJPY(result.results[`JPY_${currencyDefault}`].val);
            });

        },[currencyDefault]

    )



return(
    <div>
        <div className = "info">
            <h1>current currency {currencyDefault}</h1>
            <div className = "USD">USD > {currencyDefault} = {usd}</div>
            <div className = "EUR">EUR > {currencyDefault} = {eur}</div>
        </div>
        <div>
            <InputValue setCurrency = {setCurrencyDefault} setFlag={setFlag}/>
            <img src = {flag}/>
        </div>
        <PopularCurrencies usd = {usd} eur = {eur} gbp = {gbp} rub = {rub} cny = {cny} jpy = {jpy}/>

    </div>
);
}
