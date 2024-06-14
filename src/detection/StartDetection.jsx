import React, { useRef, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import "./StartDetection.css";

const StartDetection = () => {
  const [prediction, setPrediction] = useState('');
  const [wordArray, setWordArray] = useState([]);
  const [sentenceArray, setSentenceArray] = useState([]);
  const [isDetecting, setIsDetecting] = useState(false);
  const webcamRef = useRef(null);
  const lastDetectionTimeRef = useRef(null);
  const sentenceTimeoutRef = useRef(null);

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
  }, []);

  const fetchPrediction = async (imageSrc) => {
    try {
      const response = await fetch('http://localhost:8000/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc }),
      });
      const data = await response.json();
      setPrediction(data.letter);
      if (isDetecting) {
        setWordArray(prev => [...prev, data.letter]);
        lastDetectionTimeRef.current = Date.now(); // Update last detection time
      }
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  useEffect(() => {
    let interval;
    if (isDetecting) {
      interval = setInterval(() => {
        captureFrame();
      }, 1000); // Capture frame every second
    }

    return () => clearInterval(interval);
  }, [isDetecting, captureFrame]);

  useEffect(() => {
    let timeout;
    if (isDetecting) {
      timeout = setTimeout(() => {
        const currentTime = Date.now();
        if (lastDetectionTimeRef.current && (currentTime - lastDetectionTimeRef.current >= 20000)) {
          setSentenceArray(prev => [...prev, wordArray.join('')]);
          setWordArray([]);
          lastDetectionTimeRef.current = null; // Reset last detection time
        }
      }, 20000);
    }

    return () => clearTimeout(timeout);
  }, [isDetecting, wordArray]);

  useEffect(() => {
    if (isDetecting) {
      sentenceTimeoutRef.current = setTimeout(() => {
        setSentenceArray([]);
        setWordArray([]);
      }, 50000);
    } else {
      clearTimeout(sentenceTimeoutRef.current);
    }

    return () => clearTimeout(sentenceTimeoutRef.current);
  }, [isDetecting]);

  const handleStartDetection = () => {
    setIsDetecting(true);
  };

  const handleStopDetection = () => {
    setIsDetecting(false);
    lastDetectionTimeRef.current = null; // Reset last detection time when stopping
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
          <h3>Letter:</h3>
          <p>{prediction}</p>
        </div>
        <div className="word-output">
          <h3>Current Word:</h3>
          <p>{wordArray.join('')}</p>
        </div>
        <div className="sentence-output">
          <h3>Sentences:</h3>
          <p>{sentenceArray.join(' ')}</p>
        </div>
      </div>
      <button className="action-button" onClick={handleStartDetection} disabled={isDetecting}>Start Detection</button>
      <button className="action-button" onClick={handleStopDetection} disabled={!isDetecting}>Stop Detection</button>
    </div>
  );
};

export default StartDetection;
