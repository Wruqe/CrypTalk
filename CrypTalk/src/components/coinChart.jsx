import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function CoinGraph({ changeValue }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (changeValue !== null && !isNaN(changeValue)) {
      const ctx = chartRef.current.getContext('2d');
      
      // Destroy existing chart instance if it exists
      if (chartInstanceRef.current !== null) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'], // Example labels
          datasets: [{
            label: 'Price',
            data: [changeValue * 2, changeValue * 3, changeValue * 4], // Example data
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color
            borderWidth: 1, // Border width
            tension: 0.1
          }]
        },
        options: {
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Price'
              }
            }
          }
        }
      });
    }
    
    // Cleanup function
    return () => {
      // Destroy the chart instance when the component unmounts
      if (chartInstanceRef.current !== null) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [changeValue]);

  return <canvas ref={chartRef} />;
}

export default CoinGraph;
