import React, {useState} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

export const Graph = ({usd , eur, gbp, rub, cny, jpy}) =>{
    const $ = [];
    const e = [];

    function getRandomIntInclusive(min, max) {
        return Math.ceil((Math.random() * (max - min) + min) *100000)/100000 ; //Максимум и минимум включаются
    }
    for(let i = 0; i <= 9; i++){
        $.push(getRandomIntInclusive(usd/1.1, usd))
    }
    for(let i = 0; i <= 9; i++){
        e.push(getRandomIntInclusive(eur/1.1, eur))
    }

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
            data: $
        }, {
            name: 'European Euro',
            // data: [24916, 24064, 29742, 39851, 42490, 50282, 78121, 80434, 90851, 122490]
            data: e
        },
        //     {
        //     name: 'British pound',
        //     data: [44916, 64064, 89742, 109851, 122490, 150282, 158121, 140434, 130851, 152490]
        // },
        //     {
        //     name: 'Russian Ruble',
        //     data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387, 17722, 16005]
        // },
        //     {
        //     name: 'China Chinese Renminbi',
        //     data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227, 12169, 15112]
        // },
        //     {
        //     name: 'Japanese Yen',
        //     data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111, 8105, 11248]
        // }
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
