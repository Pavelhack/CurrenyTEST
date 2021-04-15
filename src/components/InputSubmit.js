import React, {useEffect, useState} from 'react';
import { Form, Input, Select, Button } from 'antd';
import {InputValue} from "./Input";
const { Option } = Select;


const PriceInput = ({ value = {}, onChange }) => {
    const [number, setNumber] = useState(0);

    const [currency, setCurrency] = useState(undefined);

    const [currency2, setCurrency2] = useState(undefined);

    const [currencies, setCurrencies] = useState([]);

    const UrlCurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf"

    const ArrCurrency = [];

    for (let i = 0; i < currencies.length - 1; i++) {
        ArrCurrency.push(<Option key={currencies[i]}>{currencies[i]}</Option>);
    }

    useEffect(
        () => {
            if (currencies.length === 0) {
                (async () => {
                    let response = await fetch(UrlCurrencies);
                    let result = await response.json();
                    for (let i in result.results) {
                        ArrCurrency.push(i)
                    }
                    setCurrencies(ArrCurrency);
                })();
            }
        }
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
                  value={value.currency || currency}
                  style={{ width: 80, margin: '0 8px' }}
                  onChange={onCurrencyChange}
              >
                   {ArrCurrency}
              </Select>
            <Select
                  showSearch
                  value={value.currency2 || currency2}
                  style={{ width: 80, margin: '0 8px' }}
                  onChange={onCurrencyChange2}
              >
                   {ArrCurrency}
              </Select>
        </span>
    );
};

export const Demo = ({setObject}) => {
    const onFinish = (values) => {
        setObject(values);
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
                <PriceInput />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};