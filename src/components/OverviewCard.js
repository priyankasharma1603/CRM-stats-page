import React from "react";
import { Tooltip } from "react-tooltip";
import { AiOutlineInfoCircle } from "react-icons/ai";

const OverviewCard = ({ title, value, description, growth, bgColor }) => {
  return (
    <div
      className={`relative ${bgColor} shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg`}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-gray-700">{title}</div>
        {/* Tooltip Icon */}
        <span
          className="cursor-pointer"
          data-tooltip-id="description-tooltip"
        >
          <AiOutlineInfoCircle className="text-gray-400 hover:text-gray-600" />
        </span>
        <Tooltip id="description-tooltip" content={description} />
      </div>

      {/* Card Value */}
      <div className="text-3xl font-bold text-gray-800 mt-3">{value}</div>

      {/* Growth Indicator */}
      {growth && (
        <div
          className={`flex items-center mt-1 text-sm ${
            growth > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="mr-1">
            {growth > 0 ? "▲" : "▼"}
          </span>
          {Math.abs(growth)}%
        </div>
      )}
    </div>
  );
};

export default OverviewCard;
