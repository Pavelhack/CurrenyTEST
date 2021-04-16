import React, {useState, useEffect, useRef} from 'react';
import {InputValue} from './Input'
import {Requests} from "./Requests";

export const SelectForm = () =>{

    const [currencyDefault, setCurrencyDefault] = useState("BYN");

    const [usd, setUSD] = useState(null);

    const [eur, setEUR] = useState(null);

    useEffect(
        () => {
            const req = new Requests();

            req.GetRateForUSDEUR(currencyDefault).then(result =>{
                setUSD(result.results[`USD_${currencyDefault}`].val);
                setEUR(result.results[`EUR_${currencyDefault}`].val);
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
        <InputValue setCurrency = {setCurrencyDefault}/>
    </div>
);
}
