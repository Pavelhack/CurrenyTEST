import React, {useState, useEffect} from 'react';
import { Select} from "antd";
import {Requests} from "./Requests";
const {Option} = Select;

export const InputValue = ({ setCurrency }) => {

    const [currencies, setCurrencies] = useState([]);

    const [inputValue, setValue] = useState('currency')

    function onChange(value) {

        //let SelectCurrency = DB.find((elem) => {if(elem.value === value) return elem})

        setCurrency(value);
        setValue(value)
    }

    useEffect(
        () => {
            const req = new Requests()
            let array =[]

            req.GetCurrenciesAPI().then((data)=>{

                for (let i in data.results) {
                    array.push(i)
                }

                // sort of array
                array.sort();

                const PopularCurrencies = ["USD","EUR","RUB","BYN","GBP"];

                // delete popular currencies from array
                PopularCurrencies.forEach((element) =>{
                    array = array.filter(item => item !== element)
                })

                // add popular currencies into start
                array.unshift(...PopularCurrencies)

                array = array.map((item) => <Option key={item}>{item}</Option> )

                setCurrencies(array)
            })

        }, []
    )
    return (
        <Select
            showSearch
            value = {inputValue}
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
