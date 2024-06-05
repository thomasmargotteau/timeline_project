

import React from 'react';


const TimelineItem = ({ date, title, content }) => {
  return (
    <div className="relative bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
        <button className = "absolute top-0 right-0 p-2 bg-gray-100 rounded text-black hover:bg-red-500 hover:text-white">X</button>
      <div className="font-bold mb-2 text-black">{date}</div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
        <p className = "text-black">{content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
