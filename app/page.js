// pages/index.js
import React from 'react';
import TimelineItem from './Composants/timeline';
import timelineData from './data/timelineData';

const Home = () => {
  const sortedData = timelineData.sort((a, b) => new Date(b.date) - new Date(a.date));

  const reversedData = sortedData.reverse();


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">Timeline</h1>
      <div className="timeline">
        {sortedData.map(item => (
          <TimelineItem
            key={item.id}
            id={item.id}
            date={item.date}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
