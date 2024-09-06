import React from 'react';
import BarChartComponent from './BarChart';
import PieChartComponent from './PieChart';
import LineChartComponent from './LineChart';
import DonutChartComponent from './DonutChart';
import OverviewCard from './OverviewCard';
import TimeSelector from './TimeSelector';

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'; // Icons for status indication

const Content = () => {
  return (
    <div className="p-6 bg-gray-50 flex-grow">
      {/* Time Selector */}
      <TimeSelector />

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <OverviewCard
          title="Income"
          value="$12,547"
          description="Income in the selected time range"
          growth={12.5} // Indicates positive growth
          bgColor="bg-gradient-to-r from-green-200 via-green-300 to-green-400"
        />
        <OverviewCard
          title="Expenses"
          value="$4,320"
          description="Expenses in the selected time range"
          growth={-5.2} // Indicates negative growth
          bgColor="bg-gradient-to-r from-red-200 via-red-300 to-red-400"
        />
        <OverviewCard
          title="Investments"
          value="$6,250"
          description="Investments in the selected time range"
          growth={8.0} // Indicates positive growth
          bgColor="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400"
        />
        <OverviewCard
          title="Donations"
          value="$1,500"
          description="Donations in the selected time range"
          growth={-2.0} // Indicates negative growth
          bgColor="bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <BarChartComponent />
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <PieChartComponent />
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <LineChartComponent />
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <DonutChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Content;
