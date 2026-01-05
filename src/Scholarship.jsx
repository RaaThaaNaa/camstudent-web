import React from 'react';

function Scholarship() {
  return (
    <div className="about-container" style={{ padding: '40px' }}>
      <h1 style={{ color: '#5b8fe6', marginBottom: '20px' }}>Scholarship Information</h1>
      <div className="scholarship-card" style={{ background: '#fff', padding: '20px', borderLeft: '5px solid #5b8fe6', marginBottom: '20px' }}>
        <h3>TDTU Full Scholarship</h3>
        <p>Eligibility: Cambodian students with GPA 3.5+</p>
        <button className="apply-btn">Learn More</button>
      </div>
      <div className="scholarship-card" style={{ background: '#fff', padding: '20px', borderLeft: '5px solid #5b8fe6' }}>
        <h3>External Study Grants</h3>
        <p>Government funded exchange programs for 2025.</p>
        <button className="apply-btn">Learn More</button>
      </div>
    </div>
  );
}

export default Scholarship;