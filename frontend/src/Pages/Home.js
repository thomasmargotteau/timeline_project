import Timeline from "../Composants/timeline";
import React, { useState } from 'react';

function Home() {
  const [selectedContent, setSelectedContent] = useState(null);

  const timelineItems = [
    { id: 1, date: "2024-05-01", title: "Event 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, date: "2024-05-05", title: "Event 2", content: "Sed do eiusmod." },
    { id: 3, date: "2024-03-02", title: "Event 3", content: "Test!" },
    { id: 4, date: "2024-02-02", title: "Event 4", content: "Test!" },
    { id: 5, date: "2024-02-01", title: "Event 5", content: "Test!" },
    { id: 6, date: "2024-02-01", title: "Event 5", content: "Test!" },
    { id: 4, date: "2024-02-02", title: "Event 4", content: "Test!" },
    { id: 5, date: "2024-02-01", title: "Event 5", content: "Test!" },
    { id: 6, date: "2024-02-01", title: "Event 5", content: "Test!" },
    { id: 6, date: "2024-02-01", title: "Event 5", content: "Test!" },

  ];

  const handleShowContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="home">
      <h1>Timeline</h1>
      <Timeline items={timelineItems} onShowContent={handleShowContent} />
      {selectedContent && (
        <div>
          <h2>Détail:</h2>
          <p>{selectedContent}</p>
        </div>
      )}
    </div>
  );
}

export default Home;