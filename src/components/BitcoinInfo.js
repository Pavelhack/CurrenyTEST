import React,{useEffect, useState, useRef, Fragment} from 'react';
import {Requests} from "./Requests";


export  const Bitcoin = () =>{
    const array = [];

    const usd = {};

    const gbp = {};

    const eur = {};

    const [bitcoin, setBitcoin] = useState([]);

    const timer = 5000; 

    const [iteration, setIteration] = useState(0);

    const [usd_active, setUSD_Active] = useState('red')
    
    const [gbp_active, setGBP_Active] = useState('red')
    
    const [eur_active, setEUR_Active] = useState('red')

    let usdPreviousValue = useRef();
    
    let gbpPreviousValue = useRef();
    
    let eurPreviousValue = useRef();

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
                            array.push(data[i][e])
                        }
                    }
                }
                setBitcoin(array)
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
                                array.push(data[i][e])
                            }
                        }
                    }
                    usdPreviousValue.current = usd.rate;
                    gbpPreviousValue.current = gbp.rate;
                    eurPreviousValue.current = eur.rate;
                    setBitcoin(array)
                    
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

    console.log(Math.round(usd.rate))
    
    
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