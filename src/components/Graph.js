import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Graph.css';

export const Graph = ({currencies, currencyName}) =>{

    const [us, setUS] = useState([]);
    const [eu, setEU] = useState([]);
    const [gp, setGP] = useState([]);
    const [ad, setAD] = useState([]);
    const [ca, setCA] = useState([]);
    const [cf, setCF] = useState([]);

    const ratCurrenciesFun = [setAD, setCA, setUS, setEU, setCF, setGP]
    const ratCurrencies = [ad, ca, us , eu, cf, gp];
    

    function getRandomArray(min, max) {
        const array = []
        for(let i = 0; i <= 9; i++){
            array.push(Math.ceil((Math.random() * (max - min) + min) *100000)/100000)
        }
        return(array)
    }


    useEffect(
        () =>{
            if(currencies !== null){
                for(let i = 0; i<= ratCurrencies.length - 1; i++){
                    let result = getRandomArray(currencies[i]/1.1, currencies[i])
                    let fun = ratCurrenciesFun[i]
                    fun(result)
                }
            }
                
            
        },[currencies]
    )
    
    useEffect(

        () => {
        if(currencies !== null){
            function getRandomArray(min, max) {
                const array = []
                for(let i = 0; i <= 9; i++){
                    array.push(Math.ceil((Math.random() * (max - min) + min) *100000)/100000)
                }
                return(array)
            }
            for(let i = 0; i<= ratCurrencies.length - 1; i++){
                let result = getRandomArray(currencies[i]/1.1, currencies[i])
                let fun = ratCurrenciesFun[i]
                fun(result)
            }
        }
            
        },[currencyName]
    )
    
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
