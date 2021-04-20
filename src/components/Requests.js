import DB from './CountryObject.json'
import {Select} from "antd";
const ArrCurrency = [];
const {Option} = Select;



export class Requests{

    GEtCurrenciesJson = () =>{
        for (let i = 0; i < DB.length - 1; i++) {
            ArrCurrency.push(
                <Option key={DB[i].name} flag = {DB[i].id} currencyid = {DB[i].currencyID}>
                    {DB[i].name}
                    <br></br>
                    {DB[i].currencyID}
                </Option>
            );
        }
        return ArrCurrency
    }

    GetCurrenciesAPI = async () =>{

        let response = await fetch( "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf");
        let result = await response.json();

        return result
    }

    GetRateForUSDEUR = async ( curr ) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=USD_${curr},EUR_${curr}`);
        let result = await res.json();

        return result
    };

    GetRateForGBPRUB = async ( curr ) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=GBP_${curr},RUB_${curr}`);
        let result = await res.json();

        return result
    };

    GetRateForCNYJPY = async ( curr ) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=CNY_${curr},JPY_${curr}`);
        let result = await res.json();

        return result
    };

    GetRateSt1_St2 = async (st1, st2) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=${st1}_${st2}`);
        let result = await res.json();

        return result
    }
}