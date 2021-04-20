import React, {useState, useEffect} from 'react';
import {Select} from "antd";
import {Requests} from "./Requests";
import DB from './CountryObject.json';

const {Option} = Select;
const FlagArray = [];

class Flag{
    constructor(name) {
        this.name = name
    }
}

for (let i in DB) {
    let small_id = DB[i].id.toLocaleLowerCase()
    import('../img/' + small_id + '.png')
        .then(module => {
            FlagArray.push(new Flag(module.default))
        })
}

export const InputValue = ({setCurrency, setFlag}) => {

    const [currencies, setCurrencies] = useState([]);

    const [inputValue, setValue] = useState('currency');

    let count = 0;

    function onChange(value, object) {

        setCurrency(object.currencyid);
        setValue(object.currencyid);
        for (let i in DB) {

            if (DB[i].id === object.flag) {

                setFlag(FlagArray[count].name)
            }
            count++
        }

    }

    useEffect(
        () => {
            const req = new Requests()
            let array = [];


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
