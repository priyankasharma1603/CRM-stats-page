import React from "react";

const TimeSelector = ({ setTimeRange }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Select Time Range:</label>
      <select
        onChange={(e) => setTimeRange(e.target.value)}
        className="p-2 bg-gray-100 rounded-lg"
      >
        <option value="1 day">1 day</option>
        <option value="1 week">1 week</option>
        <option value="1 month">1 month</option>
        <option value="6 months">6 months</option>
        <option value="1 year">1 year</option>
      </select>
    </div>
  );
};

export default TimeSelector;
