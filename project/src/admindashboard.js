// src/components/AdminDashboard.js
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registering the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminDashboard = () => {
  // Sample data for the charts
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 60, 70, 50, 80],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Toys', 'Games', 'Books', 'Puzzles'],
    datasets: [
      {
        label: 'Inventory',
        data: [120, 90, 150, 70],
        backgroundColor: '#28a745',
      },
    ],
  };

  const pieChartData = {
    labels: ['Online Sales', 'In-Store Sales'],
    datasets: [
      {
        label: 'Sales Distribution',
        data: [60, 40],
        backgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  };

  // Inline CSS styles
  const styles = {
    container: {
      padding: '20px',
    },
    chartContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    chart: {
      width: '100%',
      maxHeight: '400px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      padding: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>
      <div style={styles.chartContainer}>
        <div style={styles.chart}>
          <h2>Sales Over Time</h2>
          <Line data={lineChartData} />
        </div>
        <div style={styles.chart}>
          <h2>Inventory by Category</h2>
          <Bar data={barChartData} />
        </div>
        <div style={styles.chart}>
          <h2>Sales Distribution</h2>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
