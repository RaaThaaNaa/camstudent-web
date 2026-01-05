import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link for internal routing

const imageFiles = import.meta.glob('./assets/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

function Home() {
  const getImage = (name) => {
    const path = Object.keys(imageFiles).find(key => key.includes(name));
    return imageFiles[path];
  };

  const slideImages = [getImage('slide1'), getImage('slide2'), getImage('slide3')];
  const [currentIndex, setCurrentIndex] = useState(0);

  const eventData = [
    { id: 1, title: "SINH VIEN TIEU BIEU", image: getImage('S1'), link: "https://web.facebook.com/share/182XMdgAiA/" },
    { id: 2, title: "SINH VIEN TIEU BIEU", image: getImage('S2'), link: "https://web.facebook.com/share/1BMmYR6517/" },
    { id: 3, title: "SINH VIEN TIEU BIEU", image: getImage('S3'), link: "https://web.facebook.com/share/1D4EVqFgX8/" },
    { id: 4, title: "SINH VIEN TIEU BIEU", image: getImage('S4'), link: "https://web.facebook.com/share/17BR3J9Laf/" },
    { id: 5, title: "SINH VIEN TIEU BIEU", image: getImage('S5'), link: "https://web.facebook.com/share/1HN9QumaZU/" },// 2. Add the button object here
    { id: 'see-more', isButton: true } 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  return (
    <>
      <div className="hero">
        <div 
          className="hero-slide" 
          style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
        >
          <div className="hero-overlay"></div>
        </div>
      </div>

      <div className="activities-container">
        <h2 className="section-title">LATEST ACTIVITIES & EVENTS</h2>
        <div className="activities-grid">
          {eventData.map((item) => {
            // 3. Check if this is the "See More" button slot
            if (item.isButton) {
              return (
                <Link key={item.id} to="/activities" className="see-more-card">
                  <div className="see-more-box">
                    <span>SEE MORE</span>
                    <p>→</p>
                  </div>
                </Link>
              );
            }

            // Standard Event Card
            return (
              <a key={item.item} href={item.link} target="_blank" rel="noopener noreferrer" className="activity-card">
                <div className="activity-box" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="card-overlay">
                    <span>{item.title}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;