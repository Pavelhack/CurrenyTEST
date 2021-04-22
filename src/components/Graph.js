import React, {useState} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

export const Graph = ({usd , eur, gbp, rub, cny, jpy}) =>{
    const us = [];
    const eu = [];
    const gp = [];
    const ru = [];
    const cn = [];
    const jp = [];

    const ratCurrencies = [us , eu, gp, ru, cn, jp];
    const currencies = [usd , eur, gbp, rub, cny, jpy]

    function getRandomArray( $, min, max) {
        for(let i = 0; i <= 9; i++){
            $.push(Math.ceil((Math.random() * (max - min) + min) *100000)/100000)
        }
    }

    for(let i = 0; i<= ratCurrencies.length - 1; i++){
        getRandomArray(ratCurrencies[i],currencies[i]/1.1, currencies[i])
    }

    // ratCurrencies.forEach((e => getRandomIntInclusive(e/1.1, e)) )
    console.log(currencies)

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
            //data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 92503, 107177]
            data: us
        }, {
            name: 'European Euro',
            // data: [24916, 24064, 29742, 39851, 42490, 50282, 78121, 80434, 90851, 122490]
            data: eu
        },
            {
            name: 'British pound',
            // data: [44916, 64064, 89742, 109851, 122490, 150282, 158121, 140434, 130851, 152490]
            data: gp
        },
            {
            name: 'Russian Ruble',
            // data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 17722, 16005]
                data: ru
        },
            {
            name: 'China Chinese Renminbi',
            // data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227, 12169, 15112]
                data: cn
        },
            {
            name: 'Japanese Yen',
            // data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111, 8105, 11248]
                data: jp
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
    <div className="graph">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    )

}
