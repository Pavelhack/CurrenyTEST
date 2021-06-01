import React, { useEffect, useState} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
/* import './BitcoinGraph.css'; */

export const BitcoinGraph = ({bitcoinRateUSD, bitcoin, bitcoinFirstRate }) =>{

    const [series, setSeries] = useState([]);

    useEffect(
            () =>{
                    let data = [],
                    time = (new Date()).getTime(),
                    i;
                    
                        for (i = -9; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 30000,
                                y: Math.random()*(bitcoinFirstRate - (bitcoinFirstRate-100)) + bitcoinFirstRate * 100/100
                            });
                        }
                    setSeries(data);
            },[bitcoinFirstRate]
    )

    useEffect(
        () =>{
                    // set up the updating of the chart each second
                        let x = (new Date()).getTime(), // current time
                            y = bitcoinRateUSD;
                        series.push([x, y]);
        },[bitcoin]
    )

    

    const options = {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    // load: function () {
        
                    //     // set up the updating of the chart each second
                    //     var series = this.series[0];
                    //     setInterval(function () {
                            
                    //         var x = (new Date()).getTime(), // current time
                    //             y = Math.random()*(55000 - 54000)+54000 *100/100;
                    //         series.addPoint([x, y], true, true);
                    //     }, 3000);
                    // }

                    load: series
                },
                styledMode: true
            },

        
            time: {
                useUTC: false
            },
        
            title: {
                text: `Live Bitcoin Rate: ${bitcoinRateUSD} $`
            },
        
            accessibility: {
                announceNewData: {
                    enabled: true,
                    minAnnounceInterval: 15000,
                    announcementFormatter: function (allSeries, newSeries, newPoint) {
                        if (newPoint) {
                            return 'New point added. Value: ' + newPoint.y;
                        }
                        return false;
                    }
                }
            },
        
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
        
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
        
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
            },
        
            legend: {
                enabled: false
            },
        
            exporting: {
                enabled: false
            },
        
            series: [{
                name: 'Bitcoin Rate',
            
                /* data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
        
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()*(55000 - 54000)+54000 * 100/100
                        });
                    }
                    return data;
                }()) */

                data : series
            }]
        };
    

    return(
        <div className="graph_bitcoin">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}