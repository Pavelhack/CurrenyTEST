import USD_flag from '../img/us.png';
import EUR_flag from '../img/eu.png';
import GBP_flag from '../img/gb.png';
import RUB_flag from '../img/ru.png';
import CNY_flag from '../img/cn.png';
import JPY_flag from '../img/jp.png';

import React from "react";

export const PopularCurrencies = ({usd , eur, gbp, rub, cny, jpy}) =>{
    console.log(usd,eur)
    const PopularCurrencies = ["USD","EUR","GBP","RUB","BYN","CNY"];

    return(
        <div className={"table"}>
            <div className={"table_column flag"}>
                <div className={"rows flag_rows"}>
                    <img src = {USD_flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {EUR_flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {GBP_flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {RUB_flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {CNY_flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {JPY_flag}/>
                </div>
            </div>
            <div className={"table_column currencies_name"}>
                <div className={"rows currencies_name_rows"}>U. S. DOLLAR</div>
                <div className={"rows currencies_name_rows"}>EUROPEAN EURO</div>
                <div className={"rows currencies_name_rows"}>BRITISH POUND</div>
                <div className={"rows currencies_name_rows"}>RUSSIAN RUBLE</div>
                <div className={"rows currencies_name_rows"}>CHINESE RENMINBI</div>
                <div className={"rows currencies_name_rows"}>JAPANESE YEN</div>
            </div>
            <div className={"table_column country"}>
                <div className={"rows country_rows"}>U. S. A</div>
                <div className={"rows country_rows"}>EUROPEAN UNION </div>
                <div className={"rows country_rows"}>UNITED KINGDOM</div>
                <div className={"rows country_rows"}>RUSSIAN FEDERATION</div>
                <div className={"rows country_rows"}>CHINA</div>
                <div className={"rows country_rows"}>JAPAN</div>
            </div>
            <div className={"table_column rate"}>
                <div className={"rows rate_rows"}>{usd}</div>
                <div className={"rows rate_rows"}>{eur}</div>
                <div className={"rows rate_rows"}>{gbp}</div>
                <div className={"rows rate_rows"}>{rub}</div>
                <div className={"rows rate_rows"}>{cny}</div>
                <div className={"rows rate_rows"}>{jpy}</div>
            </div>
        </div>
    )
}