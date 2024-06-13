import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import "./StartDetection.css";

const StartDetection = () => {
  const [prediction, setPrediction] = useState('');
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

  const captureFrame = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      fetchPrediction(imageSrc);
    }
  }, [webcamRef]);

  const fetchPrediction = async (imageSrc) => {
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div className="sign-detection-container">
      <h2>Sign Language Detection</h2>
      <div className="video-output-container">
        <div className="video-feed">
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
        </div>
        <div className="prediction-output">
          <h3>Prediction:</h3>
          <p>{prediction}</p>
        </div>
      </div>
      <button onClick={captureFrame}>Start Detection</button>
    </div>
  );
};

export default StartDetection;
