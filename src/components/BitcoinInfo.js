import React,{useEffect, useState, useRef} from 'react';
import {Requests} from "./Requests";

export  const Bitcoin = () =>{
    const array = [];

    const usd = {};

    const gbp = {};

    const eur = {};

    const [bitcoin, setBitcoin] = useState([]);

    const timer = 3500; 

    const [iteration, setIteration] = useState(0);

    const [active, setActive] = useState('red')

    let usdPreviousValue = useRef()

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
                    setBitcoin(array)
                    
                })
                setIteration(prev=>prev+1)
            },timer)
        },[iteration],
    )

    if(+usd.rate > +usdPreviousValue.current && active !== "green"){
       setActive("green")
    }
    if(+usdPreviousValue.current > +usd.rate && active !== "red"){
        setActive("red")
    }

    
    
    return (

        <div className = {"bitcoinInfo"}>
            <div>
                    <div dangerouslySetInnerHTML={{__html:usd.symbol}} style = {{color:"gold"}}/>
                    <div>{usd.code}</div>
                    <div>{usd.description}</div>
                    <div className = {active}>{usd.rate}</div>
            </div>
            <div>
                    <div dangerouslySetInnerHTML={{__html:gbp.symbol}} style = {{color:"gold"}}/>
                    <div>{gbp.code}</div>
                    <div>{gbp.description}</div>
                    <div>{gbp.rate}</div>
            </div>
            <div>
                    <div dangerouslySetInnerHTML={{__html:eur.symbol}} style = {{color:"gold"}}/>
                    <div>{eur.code}</div>
                    <div>{eur.description}</div>
                    <div>{eur.rate}</div>
            </div>
        </div>
    
    )
}