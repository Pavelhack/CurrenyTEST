import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

export const Graph = ({usd , eur, gbp, aud, cad, chf}) =>{
    const us = [];
    const eu = [];
    const gp = [];
    const ad = [];
    const ca = [];
    const cf = [];

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
    <div className="graph">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    )

}
