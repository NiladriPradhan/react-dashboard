// import React, { useState, useCallback } from 'react';

// export default function InflationRateCalculator() {
//   const [initialAmount, setInitialAmount] = useState(100);
//   const [initialYear, setInitialYear] = useState(2020);
//   const [finalYear, setFinalYear] = useState(2023);
//   const [inflationRate, setInflationRate] = useState(2);

//   const calculateInflation = useCallback(() => {
//     const years = finalYear - initialYear;
//     return initialAmount * Math.pow(1 + inflationRate / 100, years);
//   }, [initialAmount, initialYear, finalYear, inflationRate]);

//   const finalAmount = calculateInflation();

//   return (
//     <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Inflation Rate Calculator</h2>
      
//       <div className="mb-4">
//         <label htmlFor="initialAmount" className="block text-sm font-medium text-gray-700 mb-1">
//           Initial Amount ($)
//         </label>
//         <input
//           type="number"
//           id="initialAmount"
//           value={initialAmount}
//           onChange={(e) => setInitialAmount(Number(e.target.value))}
//           className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="initialYear" className="block text-sm font-medium text-gray-700 mb-1">
//           Initial Year
//         </label>
//         <input
//           type="number"
//           id="initialYear"
//           value={initialYear}
//           onChange={(e) => setInitialYear(Number(e.target.value))}
//           className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="finalYear" className="block text-sm font-medium text-gray-700 mb-1">
//           Final Year
//         </label>
//         <input
//           type="number"
//           id="finalYear"
//           value={finalYear}
//           onChange={(e) => setFinalYear(Number(e.target.value))}
//           className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="inflationRate" className="block text-sm font-medium text-gray-700 mb-1">
//           Annual Inflation Rate (%)
//         </label>
//         <input
//           type="number"
//           id="inflationRate"
//           value={inflationRate}
//           onChange={(e) => setInflationRate(Number(e.target.value))}
//           className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//         />
//       </div>

//       <div className="bg-gray-100 p-4 rounded-md">
//         <h3 className="text-lg font-semibold mb-2 text-gray-800">Result</h3>
//         <p className="text-gray-700">
//           ${initialAmount.toFixed(2)} in {initialYear} is equivalent to:
//         </p>
//         <p className="text-2xl font-bold text-blue-600 mt-2">
//           ${finalAmount.toFixed(2)} in {finalYear}
//         </p>
//       </div>

//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2 text-gray-800">Visualization</h3>
//         <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
//           <div
//             className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
//             style={{ width: `${(initialAmount / finalAmount) * 100}%` }}
//           ></div>
//         </div>
//         <div className="flex justify-between mt-1 text-sm text-gray-600">
//           <span>{initialYear}</span>
//           <span>{finalYear}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const data = {
  Germany: [
    { year: 2018, value: 1.9 },
    { year: 2019, value: 1.4 },
    { year: 2020, value: 0.5 },
    { year: 2021, value: 3.1 },
    { year: 2022, value: 7.9 },
  ],
  England: [
    { year: 2018, value: 2.5 },
    { year: 2019, value: 1.8 },
    { year: 2020, value: 0.9 },
    { year: 2021, value: 2.6 },
    { year: 2022, value: 9.1 },
  ],
  India: [
    { year: 2018, value: 3.4 },
    { year: 2019, value: 3.7 },
    { year: 2020, value: 6.6 },
    { year: 2021, value: 5.1 },
    { year: 2022, value: 6.7 },
  ],
};

const countryColors = {
  Germany: '#1976D2',
  England: '#D32F2F',
  India: '#388E3C',
};

export default function CountryInflationChart() {
  const [selectedCountry, setSelectedCountry] = useState('Germany');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Inflation Rates by Country
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Annual inflation rates from 2018 to 2022
        </Typography>
        <Box sx={{ height: 400, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data[selectedCountry]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                label={{ value: 'Year', position: 'insideBottomRight', offset: -10 }}
              />
              <YAxis
                label={{ value: 'Inflation Rate (%)', angle: -90, position: 'insideLeft' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip formatter={(value) => `${value}%`} />
              <Line
                type="monotone"
                dataKey="value"
                stroke={countryColors[selectedCountry]}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {Object.keys(data).map((country) => (
            <Button
              key={country}
              variant={selectedCountry === country ? 'contained' : 'outlined'}
              onClick={() => handleCountryChange(country)}
              sx={{ mx: 1 }}
            >
              {country}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}