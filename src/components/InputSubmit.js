import React, {useEffect, useState} from 'react';
import { Form, Input, Select, Button } from 'antd';
import {Requests} from "./Requests";
const { Option } = Select;


export const PriceInput = ({ value = {}, onChange}) => {

    const [number, setNumber] = useState(0);

    const [currency, setCurrency] = useState(undefined);

    const [currency2, setCurrency2] = useState(undefined);

    const [currencies, setCurrencies] = useState([]);

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

    const triggerChange = (changedValue) => {
        onChange?.({
            number,
            currency,
            currency2,
            ...value,
            ...changedValue,
        });
    };

    const onNumberChange = (e) => {
        const newNumber = parseInt(e.target.value || '0', 10);

        if (Number.isNaN(number)) {
            return;
        }

        if (!('number' in value)) {
            setNumber(newNumber);
        }

        triggerChange({
            number: newNumber,
        });
    };

    const onCurrencyChange = (newCurrency) => {
        if (!('currency' in value)) {
            setCurrency(newCurrency);
        }

        triggerChange({
            currency: newCurrency,
        });
    };
    const onCurrencyChange2 = (newCurrency) => {
        if (!('currency2' in value)) {
            setCurrency2(newCurrency);
        }

        triggerChange({
            currency2: newCurrency,
        });
    };

    return (
        <span>
              <Input
                  type="text"
                  value={value.number || number}
                  onChange={onNumberChange}
                  style={{
                      width: 100,
                  }}
              />

              <Select
                  showSearch
                  value={value.currency || "currency"}
                  style={{ width: 80, margin: '0 8px' }}
                  onChange={onCurrencyChange}
              >
                   {currencies}
              </Select>

              <Select
                  showSearch
                  value = {value.currency2 || "currency"}
                  style={{ width: 80, margin: '0 8px' }}
                  onChange={onCurrencyChange2}
              >
                   {currencies}
              </Select>
        </span>
    );
};

export const Demo = ({setResult}) => {
    const onFinish = (values) => {

        const req = new Requests()

        req.GetRateSt1_St2(values.price.currency, values.price.currency2).then(result =>{
            setResult(result.results[`${values.price.currency}_${values.price.currency2}`].val * values.price?.number);
        })
    };

    const checkPrice = (_, value) => {
        if (value.number > 0) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Price must be greater than zero!'));
    };

    return (
        <Form
            name="customized_form_controls"
            layout="inline"
            onFinish={onFinish}
            initialValues={{
                price: {
                    number: 0,
                    currency: 'currency',
                },
            }}
        >
            <Form.Item
                name="price"
                label="Price"
                rules={[
                    {
                        validator: checkPrice,
                    },
                ]}
            >
                <PriceInput/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};