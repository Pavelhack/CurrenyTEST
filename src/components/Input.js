import React, {useState, useEffect} from 'react';
import {Select} from 'antd';
import DB from './CountryObject.json'

export const InputValue = ({ setCurrency }) => {
    const [currencies, setCurrencies] = useState(0);

    const [inputValue, setValue] = useState('currency')

    // let urlCurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf"

    const ArrCurrency = [];

    const {Option} = Select;

    // for (let i = 0; i < currencies.length - 1; i++) {
    //     ArrCurrency.push(<Option key={currencies[i]}>{currencies[i]}</Option>);
    // }

    for (let i = 0; i < DB.length - 1; i++) {
        ArrCurrency.push(
            <Option key={DB[i].name}>
                {DB[i].name}
                <br></br>
                {DB[i].currencyID}
            </Option>
        );
    }


    // useEffect(
    //     () => {
    //         if (currencies === 0) {
    //             (async () => {
    //                 let response = await fetch(urlCurrencies);
    //                 let result = await response.json();
    //                 for (let i in result.results) {
    //                     ArrCurrency.push(i)
    //                 }
    //                 setCurrencies(ArrCurrency);
    //             })();
    //         }
    //     }
    // )


    function onChange(value) {

        const Callback = (elem, index, DB) =>{

            if(value === elem.name)

           return elem

        }
        let  SelectCurrency = DB.find(Callback).currencyID

        setCurrency(SelectCurrency);
        setValue(SelectCurrency)
    }

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
            {ArrCurrency}
        </Select>
    )
}
