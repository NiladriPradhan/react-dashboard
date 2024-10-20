// import React from 'react'

// const data = [10, 20, 30, 50, 70, 80, 70, 70]

// export default function Stacked() {
//   const maxValue = Math.max(...data)

//   return (
//     <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
//       <div className="flex items-end h-64 space-x-2">
//         {data.map((value, index) => (
//           <div
//             key={index}
//             className="flex-1 bg-teal-500 rounded-t-sm transition-all duration-300 ease-in-out hover:bg-teal-400"
//             style={{ height: `${(value / maxValue) * 100}%` }}
//           >
//             <div className="text-xs text-white text-center mt-2">{value}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Stacked = () => {
  // Initial data for Budget and Expense
  const budgetData = [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'March', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'June', y: 159.9 },
    { x: 'July', y: 159.9 },
  ];

  const expenseData = [
    { x: 'Jan', y: 90.1 },
    { x: 'Feb', y: 100.3 },
    { x: 'March', y: 120.4 },
    { x: 'Apr', y: 140.5 },
    { x: 'May', y: 130.6 },
    { x: 'June', y: 150.7 },
    { x: 'July', y: 140.9 },
  ];

  const [data, setData] = useState(budgetData);
  const [chartLabel, setChartLabel] = useState('Budget');

  // Prepare chart data for Bar component
  const chartData = {
    labels: data.map(item => item.x),
    datasets: [
      {
        label: chartLabel,
        data: data.map(item => item.y),
        backgroundColor: chartLabel === 'Budget' ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)',
        borderColor: chartLabel === 'Budget' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Handlers for button clicks
  const handleBudgetClick = () => {
    setData(budgetData);
    setChartLabel('Budget');
  };

  const handleExpenseClick = () => {
    setData(expenseData);
    setChartLabel('Expense');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Bar chart */}
      <div className="mb-4">
        <Bar data={chartData} options={{ responsive: true }} />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleBudgetClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Budget
        </button>
        <button
          onClick={handleExpenseClick}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Expense
        </button>
      </div>
    </div>
  );
};

export default Stacked;


// create a react chartbar for admin dashboard on month using a set of array of an object inside array  ex- 
// stackData = [
// { x: "Jan", y=:111.1},
//  { x: "Feb", y=:127.3}, 
//  { x: "March", y=:143.4}, 
//  { x: "Apr", y=:159.9}, 
//  { x: "May", y=:159.9},
//  { x: "June", y=:159.9}, 
//  { x: "July", y=:159.9} 
// ],

// [
// { x: "Jan", y=:111.1},
//  { x: "Feb", y=:127.3}, 
//  { x: "March", y=:143.4}, 
//  { x: "Apr", y=:159.9}, 
//  { x: "May", y=:159.9},
//  { x: "June", y=:159.9}, 
//  { x: "July", y=:159.9} 
// ],

//  based and add two Button like "Budget" and "Expense" if we click Budget button then barchart up-down and if we click