import React, {useState, useEffect} from 'react';
import {Select} from "antd";
import {Requests} from "./Requests";
import DB from './CountryObject.json';

const {Option} = Select;
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

export const InputValue = ({setCurrency, setCurrentCountry, setCurrencyName, setFlag}) => {

    const [currencies, setCurrencies] = useState([]);

    const [inputValue, setValue] = useState('currency');


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

            // let array = [];
            // req.GetCurrenciesAPI().then((data)=>{
            //
            //     for (let i in data.results) {
            //         array.push(i)
            //     }
            //
            //     // sort of array
            //     array.sort();
            //
            //     const PopularCurrencies = ["USD","EUR","RUB","BYN","GBP"];
            //
            //     // delete popular currencies from array
            //     PopularCurrencies.forEach((element) =>{
            //         array = array.filter(item => item !== element)
            //     })
            //
            //     // add popular currencies into start
            //     array.unshift(...PopularCurrencies)
            //
            //     array = array.map((item) => <Option key={item}>{item}</Option> )
            //
            //     setCurrencies(array)
            // })

            setCurrencies(req.GEtCurrenciesJson())


        }, []
    )
    return (
        <Select
            showSearch
            value={inputValue}
            style={{
                width: "120px",
                margin: '0 8px',

            }}
            placeholder="Select a currency"
            optionFilterProp="children"
            onChange={onChange}
        >
            {currencies}
        </Select>
    )
}
