import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGraphData } from '../../Redux/Slices/homeSlice';
// import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

const LineChart = () => {
    const dispatch = useDispatch();
    const lineGraphData = useSelector((state) => state.graphDatas.graphData);
    const chartRef = useRef(null);

    useEffect(() => {
        dispatch(getGraphData());
    }, [dispatch]);

    useEffect(() => {
        if (chartRef.current && lineGraphData) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
    
            const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
            const dataset = allMonths.map(month => {
                const dataPoint = lineGraphData.find(point => point.x === month);
                return dataPoint ? dataPoint.y || 0 : 0;
            });
    
            const minY = 0;
            const maxY = Math.ceil(Math.max(...lineGraphData.map(point => point.y)) / 5) * 5;
    
            chartRef.current.chart = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: allMonths, 
                    datasets: [
                        {
                            label: 'Line Chart',
                            data: dataset,
                            borderColor: 'rgb(75, 192, 192)',
                            borderWidth: 2,
                            fill: false,
                            spanGaps: true, 
                            cubicInterpolationMode: 'monotone', 
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'category',
                            labels: allMonths, 
                        },
                        y: {
                            type: 'linear',
                            position: 'left',
                            min: minY,
                            max: maxY,
                            ticks: {
                                stepSize: 5,
                                beginAtZero: true,
                            },
                        },
                    },
                },
            });
        }
    }, [lineGraphData]);
    
    
    
    

    return <canvas ref={chartRef} />;
};

export default LineChart;
