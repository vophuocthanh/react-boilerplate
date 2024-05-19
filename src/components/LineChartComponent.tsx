import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'line', number[], string>>();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current?.getContext('2d');
    if (!myChartRef) return;

    chartInstance.current = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['00:00', '02:00', '05:00', '08:00', '11:00', '14:00', '17:00'],
        datasets: [
          {
            label: 'Đang chờ',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#EDB200',
            backgroundColor: '#EDB200',
            borderWidth: 1,
          },
          {
            label: 'Đang xử lý',
            data: [35, 45, 60, 70, 50, 45, 30],
            borderColor: '#096DD9',
            backgroundColor: '#096DD9',
            borderWidth: 1,
          },
          {
            label: 'Đã hoàn thành',
            data: [20, 30, 40, 50, 60, 70, 80],
            borderColor: '#3D9B52',
            backgroundColor: '#3D9B52',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='w-full p-2 m-0 mx-auto bg-white rounded-md'>
      <canvas ref={chartRef} className='w-full' />
    </div>
  );
};

export default LineChartComponent;
