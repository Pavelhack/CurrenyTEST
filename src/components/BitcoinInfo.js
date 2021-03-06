import React,{useEffect, useState, useRef, Fragment} from 'react';
import {Requests} from "./Requests";
import classes from "./BitcoinInfo.module.css"

export  const BitcoinInfo = ({bitcoin, setBitcoin, setBitcoinFirstRate, setBitcoinRateUSD}) =>{
    
    const CLASSES = {
        BITCOININFO: classes.bitcoinInfo,
        RED: classes.red,
        GREEN: classes.green,
        M_12: classes.m_12,
        BITCOININFO_BOX: classes.bitcoinInfo_box,
        BITCOININFO_BOX_COLUMN: classes.bitcoinInfo_box_column,
        BITCOININFO_BOX_COLUMN_SYMBOL:  classes.bitcoinInfo_box_column_symbol,
        
    } 
    
    const array = [];

    const usd = {};

    const gbp = {};

    const eur = {};

    //const [bitcoin, setBitcoin] = useState([]);

    const timer = 5000; 

    const [iteration, setIteration] = useState(0);

    const [usd_active, setUSD_Active] = useState(`${CLASSES.RED}`)
    
    const [gbp_active, setGBP_Active] = useState(`${CLASSES.RED}`)
    
    const [eur_active, setEUR_Active] = useState(`${CLASSES.RED}`)

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

    if(usd.rate > usdPreviousValue.current && usd_active !== `${CLASSES.GREEN}`){
        setUSD_Active(`${CLASSES.GREEN}`)
    }
    if(usdPreviousValue.current > usd.rate && usd_active !== `${CLASSES.RED}`){
        setUSD_Active(`${CLASSES.RED}`)
    }

    if(gbp.rate > gbpPreviousValue.current && gbp_active !== `${CLASSES.GREEN}`){
        setGBP_Active(`${CLASSES.GREEN}`)
    }
    if(gbpPreviousValue.current > gbp.rate && gbp_active !== `${CLASSES.RED}`){
        setGBP_Active(`${CLASSES.RED}`)
    }
    
    if(eur.rate > eurPreviousValue.current && eur_active !== `${CLASSES.GREEN}`){
        setEUR_Active(`${CLASSES.GREEN}`)
    }
    if(eurPreviousValue.current > eur.rate && eur_active !== `${CLASSES.RED}`){
        setEUR_Active(`${CLASSES.RED}`)
    }


    

    return (
        <Fragment>
            <div className = {CLASSES.BITCOININFO}>
                
                <div className = {CLASSES.BITCOININFO_BOX}>
                    <div className = {CLASSES.BITCOININFO_BOX_COLUMN}>
                    <div dangerouslySetInnerHTML={{__html:usd.symbol}} className = {`${CLASSES.BITCOININFO_BOX_COLUMN_SYMBOL} ${CLASSES.M_12}`}/>
                        <div className = {CLASSES.M_12}>{usd.code}</div>
                        <div className = {CLASSES.M_12}>{usd.description}</div>
                        <div className = {`${usd_active} ${CLASSES.M_12}`}>{usd.rate}</div>
                    </div>
                </div>
                <div className = {CLASSES.BITCOININFO_BOX}>
                    <div className = {CLASSES.BITCOININFO_BOX_COLUMN}>
                        <div dangerouslySetInnerHTML={{__html:gbp.symbol}} className = {`${CLASSES.BITCOININFO_BOX_COLUMN_SYMBOL} ${CLASSES.M_12}`}/>
                        <div className = {CLASSES.M_12}>{gbp.code}</div>
                        <div className = {CLASSES.M_12}>{gbp.description}</div>
                        <div className = {`${usd_active} ${CLASSES.M_12}`}>{gbp.rate}</div>
                    </div>
                </div>
                <div className = {CLASSES.BITCOININFO_BOX}>
                    <div className = {CLASSES.BITCOININFO_BOX_COLUMN}>
                        <div dangerouslySetInnerHTML={{__html:eur.symbol}} className= {`${CLASSES.BITCOININFO_BOX_COLUMN_SYMBOL} ${CLASSES.M_12}`}/>
                        <div className = {CLASSES.M_12}>{eur.code}</div>
                        <div className = {CLASSES.M_12}>{eur.description}</div>
                        <div className = {`${usd_active} ${CLASSES.M_12}`}>{eur.rate}</div>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}