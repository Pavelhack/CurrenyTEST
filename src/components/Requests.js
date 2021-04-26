import DB from './CountryObject.json'
import {Select} from "antd";
const ArrCurrency = [];
const {Option} = Select;



export class Requests{
    message = "Online Services Temporarily unavailable"

    GEtCurrenciesJson = () =>{
        for (let i = 0; i < DB.length - 1; i++) {
            ArrCurrency.push(
                <Option key={DB[i].name} flag = {DB[i].id} currencyid = {DB[i].currencyID} currencyname = {DB[i].currencyName}>
                    {DB[i].name}
                    <br></br>
                    {DB[i].currencyID}
                </Option>
            );
        }
        return ArrCurrency
    };

    GetBitcoin  = async () =>{
            let response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
            let result = await response.json();
            return result
    };

    GetCurrenciesAPI = async () =>{

        let response = await fetch( "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf");

            let result = await response.json();

            return result
    };

    GetRateForUSDEUR = async ( curr ) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=USD_${curr},EUR_${curr}`);
        if (res.ok) {
            let result = await res.json();
            return result
        }else{
            return this.message
            }
    };

    GetRateForGBPRUB = async ( curr ) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=GBP_${curr},AUD_${curr}`);
        if (res.ok) {
            let result = await res.json();
            return result
        }else{
            return this.message
        }
    };


    GetRateForCNYJPY = async ( curr ) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=CAD_${curr},CHF_${curr}`);
        if (res.ok) {
            let result = await res.json();
            return result
        }else{
            return this.message
        }
    };

    GetRateSt1_St2 = async (st1, st2) =>{
        let res = await fetch(`https://free.currconv.com/api/v7/convert?apiKey=cc1c42623e7c44a5dccf&q=${st1}_${st2}`);
        if (res.ok) {
            let result = await res.json();
            return result
        }else{
            return this.message
        }
    }
}