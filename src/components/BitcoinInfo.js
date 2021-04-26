import React,{useEffect, useState} from 'react';
import {Requests} from "./Requests";

// class BitcoinRate {
//     constructor(object){
//         //this.currency = object
//         this.code = object["code"]
//         this.symbol = object["symbol"]
//         this.rate = object["rate"]
//         this.description = object["description"]
//         this.rate_float = object["rate_float"]
//     }
// };

        

export  const Bitcoin = () =>{

    let array = [];

    const [bitcoin, setBitcoin] = useState([]);

    bitcoin.forEach(elem => console.log(elem.code, elem.symbol, elem.rate))


useEffect(
    () =>{
            const req = new Requests()

            req.GetBitcoin().then(data => {
                for(let i in data){
                    if(i === "bpi"){
                        for(let e in data[i]){
                            array.push(data[i][e])
                        }
                    }
                }
            })
            setBitcoin(array)

        },[]
    )
    return (
    <div>
        <div>BitcoinRate Now</div>
                <div>&#36;</div>
    </div>
    
    )
}