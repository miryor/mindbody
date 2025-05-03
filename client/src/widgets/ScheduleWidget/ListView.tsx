import React from 'react';
import { ScheduleItem } from './types';

interface ListViewProps {
    data: ScheduleItem[];
}

const ListView: React.FC<ListViewProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No schedule items found for this period.</p>;
    }

    return (
        <div className="list-view">
            <h3>List View</h3>
            <ul>
                {data.map(item => (
                    <li key={item.id} className={`list-item item-type-${item.type}`}>
                        <div className="item-header">
                            <span className="item-name">{item.name}</span>
                            <span className="item-type">({item.type})</span>
                        </div>
                        <div className="item-details">
                            <span className="item-time">
                                {new Date(item.startDateTime).toLocaleString()} - {new Date(item.endDateTime).toLocaleTimeString()}
                            </span>
                            <span className="item-instructor">
                                Instructor: {item.instructorName || 'N/A'}
                                {/* Optional Image */}
                                {/* {item.instructorImageUrl && <img src={item.instructorImageUrl} alt={item.instructorName || ''} style={{ width: '20px', height: '20px', borderRadius: '50%', marginLeft: '5px' }} />} */}
                            </span>
                            <span className="item-location">
                                Location: {item.locationName || 'N/A'}
                            </span>
                            {/* TODO: Add more details or actions (e.g., description, booking button if applicable later) */}
                        </div>
                    </li>
                ))}
            </ul>
            {/* TODO: Implement Pagination or Infinite Scrolling */}
        </div>
    );
};

export default ListView; 