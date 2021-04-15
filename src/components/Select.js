import React, {useState, useEffect, useRef} from 'react';
import {InputValue} from './Input'

export const SelectForm = ({currencyDefault , setCurrencyDefault}) =>{

    const [usd, setUSD] = useState(null);

    const [eur, setEUR] = useState(null);

    let previousState = useRef(null);

    const defaultCurrencies = `https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=USD_${currencyDefault},EUR_${currencyDefault}`

    const getDate = "https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=USD_BYN,BYN_USD&compact=ultra&date=2021-04-01&endDate=2021-04-15"

    useEffect(
        () => {
            if(previousState.current !== currencyDefault){
                (async () =>{
                    let res = await fetch(defaultCurrencies);
                    let resultFrom = await res.json();
                        setUSD(resultFrom.results[`USD_${currencyDefault}`].val);
                        setEUR(resultFrom.results[`EUR_${currencyDefault}`].val);
                    previousState.current = currencyDefault;
                })();
            }
        }
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
