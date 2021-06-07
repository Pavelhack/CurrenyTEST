import React, {useState, useEffect} from 'react';
import {Select} from "antd";
import {Requests} from "./Requests";
import DB from './CountryObject.json';
import classes from "./InputCurrencies.module.css";



const CLASSES = {
    INPUT: classes.input,
}


const FlagArray = [];

class Flag{
    constructor(hash, name) {
        this.hash = hash
        this.name = name
    }
}

for (let i in DB) {
    let small_id = DB[i].id.toLocaleLowerCase()
    import('../img/' + small_id + '.png')
        .then(module => {
            FlagArray.push(new Flag(module.default, small_id))
        })
}



export const InputCurrencies = ({setCurrency, setCurrentCountry, setCurrencyName, setFlag}) => {

    const [currencies, setCurrencies] = useState([]);

    const [inputValue, setValue] = useState('BYN');


    function onChange(value, object) {

        setCurrencyName(object.currencyname)
        setCurrentCountry(object.key)
        setCurrency(object.currencyid);
        setValue(object.currencyid);
        for (let i in DB) {

            if (DB[i].id === object.flag) {
                const goal = FlagArray.find(elem => elem.name === object.flag.toLocaleLowerCase())
                setFlag(goal.hash)
            }
        }

    }

    useEffect(
        () => {
            const req = new Requests()
            setCurrencies(req.GEtCurrenciesJson())
        }, []
    )

    return (
        <Select 
            style = {{width: "191px"}}
            /* className = {CLASSES.INPUT} */
            showSearch
            value={inputValue}
            placeholder="Select a currency"
            optionFilterProp="children"
            onChange={onChange}
        >
            {currencies}
        </Select>
    )
}
