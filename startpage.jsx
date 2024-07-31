
import React from 'react';
import './startpage.css';

const StartPage = ({ onPageChange }) => {
  const handleStartClick = () => {
    onPageChange('search');
  };

  const backgroundImageStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${require('./img2.jpg')})`, // changed to './img2.jpg'
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={backgroundImageStyle}>
      <h1 className="wave-effect">Dish Discovery</h1>
      <button onClick={handleStartClick} className="start-button">
        Start
      </button>
    </div>
  );
};

export default StartPage;