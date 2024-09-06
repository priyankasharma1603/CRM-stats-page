import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 200 }, // 26%
  { name: 'Group B', value: 260 }, // 34%
  { name: 'Group C', value: 240 }, // 32%
  { name: 'Group D', value: 60 },  // 8%
];

const COLORS = ['#FF8042', '#FFBB28', '#A058EC', '#0088FE'];
const RADIAN = Math.PI / 180;

// Helper function to calculate percentage
const getPercentage = (value, total) => ((value / total) * 100).toFixed(0);

// Label Renderer with Percentage
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index, value,
}) => {
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
  const percentage = getPercentage(value, totalValue);

  return (
    <text
      x={x}
      y={y}
      fill="red" // Label color
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={20}
      fontWeight="bold"
    >
      {`${percentage}%`}
    </text>
  );
};

const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

const PieChartComponent = () => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `${value} (${getPercentage(value, totalValue)}%)`} />
      <Legend
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
        wrapperStyle={{ paddingTop: '20px' }}
      />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;
