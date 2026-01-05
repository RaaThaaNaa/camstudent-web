import React from 'react';

// 1. Import your images the same way as Home.jsx
const imageFiles = import.meta.glob('./assets/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

function Activities() {
  const getImage = (name) => {
    const path = Object.keys(imageFiles).find(key => key.includes(name));
    return imageFiles[path];
  };

  // 2. Add your full list of events here (you can add more than 6 now!)
  const eventData = [
    { id: 1, title: "SINH VIEN TIEU BIEU", image: getImage('S1'), link: "https://web.facebook.com/share/182XMdgAiA/" },
    { id: 2, title: "SINH VIEN TIEU BIEU", image: getImage('S2'), link: "https://web.facebook.com/share/1BMmYR6517/" },
    { id: 3, title: "SINH VIEN TIEU BIEU", image: getImage('S3'), link: "https://web.facebook.com/share/1D4EVqFgX8/" },
    { id: 4, title: "SINH VIEN TIEU BIEU", image: getImage('S4'), link: "https://web.facebook.com/share/17BR3J9Laf/" },
    { id: 5, title: "SINH VIEN TIEU BIEU", image: getImage('S5'), link: "https://web.facebook.com/share/1HN9QumaZU/" },
    // Add more objects here to fill the page
  ];

  return (
    <div className="activities-page-wrapper"> 
      <div className="activities-container">
        {/* Same Title as Homepage */}
        <h2 className="section-title">ALL ACTIVITIES & EVENTS</h2>
        
        {/* Same Grid Structure */}
        <div className="activities-grid">
          {eventData.map((event) => (
            <a key={event.id} href={event.link} target="_blank" rel="noopener noreferrer" className="activity-card">
              <div className="activity-box" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="card-overlay">
                  <span>{event.title}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activities;