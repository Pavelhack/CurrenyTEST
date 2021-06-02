import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

export const Graph = ({usd , eur, gbp, aud, cad, chf, bitcoinFirstRate}) =>{

   /*  const [us, setUS] = useState([]);
    const [eu, setEU] = useState([]);
    const [gp, setGP] = useState([]);
    const [ad, setAD] = useState([]);
    const [ca, setCA] = useState([]);
    const [cf, setCF] = useState([]); */
    
    const us = [];
    const eu = [];
    const gp = [];
    const ad = [];
    const ca = [];
    const cf = [];

    /* const ratCurrenciesFun = [setUS, setEU, setGP, setAD, setCA, setCF] */
    const ratCurrencies = [us , eu, gp, ad, ca, cf];
    const currencies = [usd , eur, gbp, aud, cad, chf]

    function getRandomArray( $, min, max) {
        for(let i = 0; i <= 9; i++){
            $.push(Math.ceil((Math.random() * (max - min) + min) *100000)/100000)
        }
    }

    for(let i = 0; i<= ratCurrencies.length - 1; i++){
        getRandomArray(ratCurrencies[i],currencies[i]/1.1, currencies[i])
    }

    /* useEffect(
        () => {
            function getRandomArray( $, min, max) {
                for(let i = 0; i <= 9; i++){
                    $.push(Math.ceil((Math.random() * (max - min) + min) *100000)/100000)
                }
                return($)
            }
            for(let i = 0; i<= ratCurrencies.length - 1; i++){
                let result = getRandomArray(ratCurrencies[i], currencies[i]/1.1, currencies[i])
                let fun = ratCurrenciesFun[i]
                fun(result)
            }
        },[chf]
    )
 */
    

    const options ={
        title: {
            text: 'Changes in the rate for the last 10 days'
        },

        subtitle: {
            text: 'Source: webscript.by'
        },

        yAxis: {
            title: {
                text: 'Rate'
            }
        },

        // set date
        xAxis: {
            type: 'datetime'
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: Date.now()- (86400000 * 10),// 10 days ago
                pointInterval: 24 * 3600 * 1000 // one day
            }
        },

        series: [{
            name: 'U.S.Dollar',
            data: us
        }, {
            name: 'European Euro',
            data: eu
        },
            {
            name: 'British pound',
            data: gp
        },
            {
            name: 'Australian dollar',
                data: ad
        },
            {
            name: 'Canadian dollar',
                data: ca
        },
            {
            name: 'Swiss franc',
                data: cf
        }
        ],

        chart: {
            styledMode: true
        },

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 600,
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    };

return(

    <div className="graph_currecies">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    )

}
