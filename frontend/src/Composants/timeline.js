
// Timeline.js
const TimelineItem = ({ date, title, onClick, children }) => {
  return (
    <div className="timeline-item" onClick={onClick}>
      <div className="timeline-content">
        <h3>{date}</h3>
        <h4>{title}</h4>
        <button>Test</button>
        {children}
      </div>
    </div>
  );
};

const Timeline = ({ items, onShowContent }) => {
  return (
    <div className="timeline">
      {items.map((item) => (
        <TimelineItem 
          key={item.id} 
          date={item.date} 
          title={item.title}
          onClick={() => onShowContent(item.content)}
        />
      ))}
    </div>
  );
};

export default Timeline;
