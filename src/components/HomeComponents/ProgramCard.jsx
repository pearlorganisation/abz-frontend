// app/components/ProgramCard.jsx
import React from 'react';

const ProgramCard = ({ title, subtitle, type, status, bgColor }) => {
  return (
    <div
      className={`rounded-xl p-5 shadow-md transition-transform duration-300 hover:scale-105`}
      style={{ background: bgColor }}
    >
      <div className="mb-3">
        <span className="text-xs bg-white text-black px-2 py-1 rounded-full font-semibold">
          {type}
        </span>
      </div>
      <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
      <p className="text-sm text-gray-300 mb-3">{subtitle}</p>
      <div className="flex flex-wrap gap-2 text-xs mb-4">
        {status.map((item, index) => (
          <span
            key={index}
            className="px-2 py-1 border border-white rounded-full text-white"
          >
            {item}
          </span>
        ))}
      </div>
      <button className="w-full py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
        View Program
      </button>
    </div>
  );
};

export default ProgramCard;
