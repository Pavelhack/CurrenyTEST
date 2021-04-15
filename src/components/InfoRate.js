import React, {useEffect, useRef} from 'react';
import {useState} from "react";
import {Demo} from "./InputSubmit"




export const InfoRate = () =>{

    let PreviousSt = useRef(undefined);

    const [objectData, setObjectData] = useState({});

    const [result, setResult] = useState();

    const st1 = objectData?.price?.currency;

    const st2 = objectData?.price?.currency2;

    const number = objectData.price?.number;

    const GetRate  = `https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=${st1}_${st2}`;

    const Output = (result * number)



    useEffect(
        () => {
            console.log(st1, PreviousSt.current)

            if(PreviousSt.current !== st1){
                (async () =>{
                    let res = await fetch(GetRate);
                    let getResult = await res.json();
                    setResult(getResult.results[`${st1}_${st2}`].val);
                    PreviousSt.current = st1;
                })();
            }
        }
    )

    return(
        <div>
            <div>
                <p>It`s Your Value {Output}</p>
                <Demo setObject = {setObjectData}/>
            </div>
        </div>
    )
    
}
