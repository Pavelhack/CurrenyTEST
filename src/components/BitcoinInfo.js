import React,{useEffect, useState, useRef, Fragment} from 'react';
import {Requests} from "./Requests";


export  const Bitcoin = ({bitcoin, setBitcoin, setBitcoinFirstRate, setBitcoinRateUSD}) =>{
    const array = [];

    const usd = {};

    const gbp = {};

    const eur = {};

    //const [bitcoin, setBitcoin] = useState([]);

    const timer = 5000; 

    const [iteration, setIteration] = useState(0);

    const [usd_active, setUSD_Active] = useState('red')
    
    const [gbp_active, setGBP_Active] = useState('red')
    
    const [eur_active, setEUR_Active] = useState('red')

    let usdPreviousValue = useRef(0);
    
    let gbpPreviousValue = useRef(0);
    
    let eurPreviousValue = useRef(0);

    let previousVariable = useRef(0);

    let variable = useRef(0);

        bitcoin.forEach(elem => {
            if(elem.code === "USD"){
                for(let i in elem){
                    usd.code = elem.code;
                    usd.symbol = elem.symbol;
                    usd.rate = elem.rate_float
                    usd.description = elem.description;
                }
            }
            if(elem.code === "GBP"){
                for(let i in elem){
                    gbp.code = elem.code;
                    gbp.symbol = elem.symbol;
                    gbp.rate = elem.rate_float;
                    gbp.description = elem.description;
                }
            }
            if(elem.code === "EUR"){
                for(let i in elem){
                    eur.code = elem.code;
                    eur.symbol = elem.symbol;
                    eur.rate = elem.rate_float
                    eur.description = elem.description;
                }
            }
        })

    useEffect(
        
        ()=>{
            const req = new Requests();
            req.GetBitcoin().then(data => {
                for(let i in data){
                    if(i === "bpi"){
                        for(let e in data[i]){
                            if(data[i][e].code === "USD"){
                                for(let elem in data[i][e]){
                                    setBitcoinFirstRate(data[i][e].rate_float)
                                }
                            }
                        }
                    }
                }
            })
        },[]
    )

    useEffect(
        () =>{
            setTimeout(()=>{
                const req = new Requests();
                req.GetBitcoin().then(data => {
                    for(let i in data){
                        if(i === "bpi"){
                            for(let e in data[i]){
                                    if(data[i][e].code === "USD"){
                                        for(let elem in data[i][e]){
                                            if(data[i][e].rate_float !== previousVariable.current){
                                                setBitcoinRateUSD(data[i][e].rate_float)
                                                variable.current = data[i][e].rate_float
                                            }
                                        }
                                    }
                                array.push(data[i][e])
                            }
                        }
                    }

                    if(previousVariable.current !== variable.current){
                        previousVariable.current = variable.current;
                        usdPreviousValue.current = usd.rate;
                        gbpPreviousValue.current = gbp.rate;
                        eurPreviousValue.current = eur.rate;
                        setBitcoin(array);
                    }
                })
                setIteration(prev=>prev+1)
            },timer)
        },[iteration],
    )

    if(usd.rate > usdPreviousValue.current && usd_active !== "green"){
        setUSD_Active("green")
    }
    if(usdPreviousValue.current > usd.rate && usd_active !== "red"){
        setUSD_Active("red")
    }

    if(gbp.rate > gbpPreviousValue.current && gbp_active !== "green"){
        setGBP_Active("green")
    }
    if(gbpPreviousValue.current > gbp.rate && gbp_active !== "red"){
        setGBP_Active("red")
    }
    
    if(eur.rate > eurPreviousValue.current && eur_active !== "green"){
        setEUR_Active("green")
    }
    if(eurPreviousValue.current > eur.rate && eur_active !== "red"){
        setEUR_Active("red")
    }

    return (
        <Fragment>
        <div className = {"bitcoinInfo"}>
            
            <div>
                    <div dangerouslySetInnerHTML={{__html:usd.symbol}} style = {{color:"gold"}}/>
                    <div>{usd.code}</div>
                    <div>{usd.description}</div>
                    <div className = {usd_active}>{usd.rate}</div>
            </div>
            <div>
                    <div dangerouslySetInnerHTML={{__html:gbp.symbol}} style = {{color:"gold"}}/>
                    <div>{gbp.code}</div>
                    <div>{gbp.description}</div>
                    <div className = {gbp_active}>{gbp.rate}</div>
            </div>
            <div>
                    <div dangerouslySetInnerHTML={{__html:eur.symbol}} style = {{color:"gold"}}/>
                    <div>{eur.code}</div>
                    <div>{eur.description}</div>
                    <div className = {eur_active}>{eur.rate}</div>
            </div>
            
        </div>
        </Fragment>
    )
}