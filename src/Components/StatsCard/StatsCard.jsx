import React from 'react';
import './StatsCard.css';

const StatsCard = ({ icon, label, value, color }) => {
  return (
    <div className="stat-card" style={{ borderLeftColor: color }}>
      <div className="stat-content">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
      <div className="stat-icon" style={{ color: color }}>
        {icon}
      </div>
    </div>
  );
};

export default StatsCard;