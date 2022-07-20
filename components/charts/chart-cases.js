import React from 'react'
import {Line} from 'react-chartjs-2'
import dateFormat from 'dateformat'
import style from './chart.module.scss'
import numberFormat from '../../utils/numberFormat'

const LineCases = ({data}) => {
    if (!data)
        return (
            <h1 className={style.error}>
                This country does not have enough data to display chart.
            </h1>
        )

    const dailyData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Cases',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#FAA275',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                borderWidth: 4,
                pointBorderColor: 'rgb(23, 25, 35)',
                pointBackgroundColor: 'white',
                pointBorderWidth: 6,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: 'white',
                pointHoverBorderColor: 'rgb(23, 25, 35)',
                pointHoverBorderWidth: 6,
                pointStyle: 'circle',
                pointRadius: 8,
                data: Object.values(data)
            }
        ]
    }

    const options = {
        tooltips: {
            intersect: false,
            backgroundColor: 'rgb(45, 47, 58)',
            cornerRadius: 2,
            bodyFontColor: '#FAA275',
            bodyAlign: 'center',
            bodyFontSize: 14,
            bodyFontStyle: 'bold',
            titleFontFamily: 'Inter',
            displayColors: false,
            xPadding: 10,
            yPadding: 10,
            callbacks: {
                title: () => '',
                label: (d) => `${numberFormat(d.value)} Cases`
            }
        },
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(160, 174, 192,0.2)',
                        borderDash: [0],
                        lineWidth: 1,
                        drawBorder: true,
                        drawTicks: false
                    },
                    ticks: {
                        callback: function (value) {
                            return dateFormat(value, 'd/mm/yy')
                        },

                        fontColor: '#fff',
                        fontSize: 14,
                        padding: 24
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: 'rgba(160, 174, 192, 0.2 )',
                        borderDash: [0],
                        lineWidth: 1,
                        drawBorder: true,
                        drawTicks: false
                    },
                    ticks: {
                        callback: function (value) {
                            return numberFormat(value)
                        },
                        fontColor: '#fff',
                        fontSize: 14,
                        padding: 21
                    }
                }
            ]
        }
    }

    return (
        <div className={style.containerContainer}>
            <div className={style.container}>
                <Line data={dailyData} options={options}/>
            </div>
        </div>
    )
}

export default LineCases
