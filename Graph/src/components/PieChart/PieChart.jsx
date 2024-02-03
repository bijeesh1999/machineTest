import React, { useEffect,
    //  useState 
    } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPieChartData } from '../../Redux/Slices/homeSlice';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, PieController } from 'chart.js';

Chart.register(ArcElement, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend, PieController);

const PieChart = () => {
    const dispatch = useDispatch();
    const pieChartData = useSelector((state) => state.graphDatas.pieChartData);

    useEffect(() => {
        dispatch(getPieChartData());
    }, [dispatch]);

    const handleElementClick = (elems) => {
        if (elems.length > 0) {
            const clickedElement = elems[0];

            if (clickedElement._model && clickedElement._model.label) {
                const label = clickedElement._model.label;
                const data = clickedElement._model.dataset.data[clickedElement._index];

                console.log(`Clicked: ${label} - ${data}`);
            } else {
                console.error('Invalid clicked element structure:', clickedElement);
            }
        }
    };

    const backgroundColors = ['#67c587', '#88d1a1', '#a9deba', '#c9ead4', '#eaf6ed'];

    return (
        <div className="pie-chart-container">
            <div className="legend-container">
                <Pie
                    data={{
                        labels: pieChartData.map(item => item.label),
                        datasets: [{
                            data: pieChartData.map(item => item.value),
                            backgroundColor: backgroundColors,
                        }],
                    }}
                    options={{
                        onClick: (event, elements) => handleElementClick(elements),
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    usePointStyle: true,
                                },
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default PieChart;
