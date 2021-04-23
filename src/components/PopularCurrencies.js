import USD_flag from '../img/us.png';
import EUR_flag from '../img/eu.png';
import GBP_flag from '../img/gb.png';
import AUD_flag from '../img/au.png';
import CAD_flag from '../img/ca.png';
import CHF_flag from '../img/ch.png';

import React from "react";

export const PopularCurrencies = ({usd , eur, gbp, aud, cad, chf, flag}) =>{
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
                    <img src = {AUD_flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {CAD_flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {CHF_flag}/>
                </div>
            </div>
            <div className={"table_column currencies_name"}>
                <div className={"rows currencies_name_rows"}>U. S. DOLLAR</div>
                <div className={"rows currencies_name_rows"}>EUROPEAN EURO</div>
                <div className={"rows currencies_name_rows"}>BRITISH POUND</div>
                <div className={"rows currencies_name_rows"}>AUSTRALIAN DOLLAR</div>
                <div className={"rows currencies_name_rows"}>CANADIAN DOLLAR</div>
                <div className={"rows currencies_name_rows"}>SWISS FRANC</div>
            </div>
            <div className={"table_column country"}>
                <div className={"rows country_rows"}>U. S. A</div>
                <div className={"rows country_rows"}>EUROPEAN UNION </div>
                <div className={"rows country_rows"}>UNITED KINGDOM</div>
                <div className={"rows country_rows"}>AUSTRALIA</div>
                <div className={"rows country_rows"}>CANADA</div>
                <div className={"rows country_rows"}>SWITZERLAND</div>
            </div>
            <div className={"table_column rate"}>
                <div className={"rows rate_rows"}>{usd}</div>
                <div className={"rows rate_rows"}>{eur}</div>
                <div className={"rows rate_rows"}>{gbp}</div>
                <div className={"rows rate_rows"}>{aud}</div>
                <div className={"rows rate_rows"}>{cad}</div>
                <div className={"rows rate_rows"}>{chf}</div>
            </div>
            <div className={"table_column flag"}>
                <div className={"rows flag_rows"}>
                    <img src = {flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {flag}/>
                </div>
                <div className={"rows flag_rows"}>
                    <img src = {flag}/>
                </div>
            </div>
        </div>
    )
}