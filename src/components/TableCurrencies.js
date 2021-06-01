import USD_flag from '../img/us.png';
import EUR_flag from '../img/eu.png';
import GBP_flag from '../img/gb.png';
import AUD_flag from '../img/au.png';
import CAD_flag from '../img/ca.png';
import CHF_flag from '../img/ch.png';
import classes from './TableCurrencies.module.css';

export const PopularCurrencies = ({usd , eur, gbp, aud, cad, chf, flag}) =>{
    const CLASSES = {
       CURRENT_CURRENCY_TABLE: classes.current_currency_table,
       CURRENT_CURRENCY_TABLE_HEADER: classes.current_currency_table_header,
       CURRENT_CURRENCY_TABLE_FONTOFCURRENCY: classes.current_currency_table_fontOfcurrency,
       CURRENT_CURRENCY_TABLE_COLUMN: classes.current_currency_table_column,
       CURRENT_CURRENCY_TABLE_ROWS: classes.current_currency_table_rows,
       CURRENT_CURRENCY_TABLE_ROWS_INSIDE: classes.current_currency_table_rows_inside,
       CURRENT_CURRENCY_FLAG_IMG: classes.current_currency_flag_img,
       ODD: classes.odd,
       EVEN: classes.even

    }

    return(
        <div className={CLASSES.CURRENT_CURRENCY_TABLE}>
            <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_COLUMN} flag`}>

                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_HEADER} `}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        National flag of country
                        </div>
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} flag_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        <img className = {CLASSES.CURRENT_CURRENCY_FLAG_IMG} src = {USD_flag}/>
                    </div>
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} flag_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        <img className = {CLASSES.CURRENT_CURRENCY_FLAG_IMG} src = {EUR_flag}/>
                    </div>
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} flag_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        <img className = {CLASSES.CURRENT_CURRENCY_FLAG_IMG} src = {GBP_flag}/>
                    </div>
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} flag_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        <img className = {CLASSES.CURRENT_CURRENCY_FLAG_IMG} src = {AUD_flag}/>
                    </div>
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} flag_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        <img className = {CLASSES.CURRENT_CURRENCY_FLAG_IMG} src = {CAD_flag}/>
                    </div>
                    </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} flag_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        <img className = {CLASSES.CURRENT_CURRENCY_FLAG_IMG} src = {CHF_flag}/>
                    </div>
                </div>
            </div>
            <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_COLUMN} currencies_name`}>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_HEADER} `}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        Currency state
                    </div>
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} currencies_name_rows ${CLASSES.ODD} ${CLASSES.CURRENT_CURRENCY_TABLE_FONTOFCURRENCY}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        U. S. DOLLAR
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} currencies_name_rows ${CLASSES.EVEN} ${CLASSES.CURRENT_CURRENCY_TABLE_FONTOFCURRENCY}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        EUROPEAN EURO
                    </div> 
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} currencies_name_rows ${CLASSES.ODD} ${CLASSES.CURRENT_CURRENCY_TABLE_FONTOFCURRENCY}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        BRITISH POUND
                    </div> 
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} currencies_name_rows ${CLASSES.EVEN} ${CLASSES.CURRENT_CURRENCY_TABLE_FONTOFCURRENCY}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        AUSTRALIAN DOLLAR
                    </div> 
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} currencies_name_rows ${CLASSES.ODD} ${CLASSES.CURRENT_CURRENCY_TABLE_FONTOFCURRENCY}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        CANADIAN DOLLAR
                    </div> 
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} currencies_name_rows ${CLASSES.EVEN} ${CLASSES.CURRENT_CURRENCY_TABLE_FONTOFCURRENCY}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        SWISS FRANC
                    </div> 
                </div>
            </div>
            <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_COLUMN} country`}>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_HEADER} `}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        Country
                    </div>
                </div>    
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} country_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        U. S. A
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} country_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        EUROPEAN UNION
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} country_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        UNITED KINGDOM
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} country_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        AUSTRALIA
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} country_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        CANADA
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} country_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        SWITZERLAND
                    </div>  
                </div>
            </div>
            <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_COLUMN} rate`}>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_HEADER} `}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        Exchange rate
                    </div>
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} rate_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        {usd}
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} rate_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        {eur}
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} rate_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        {gbp}
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} rate_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        {aud}
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} rate_rows ${CLASSES.ODD}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        {cad}
                    </div>  
                </div>
                <div className={`${CLASSES.CURRENT_CURRENCY_TABLE_ROWS} rate_rows ${CLASSES.EVEN}`}>
                    <div className = {CLASSES.CURRENT_CURRENCY_TABLE_ROWS_INSIDE}>
                        {chf}
                    </div>  
                </div>
            </div>
        </div>
    )
}