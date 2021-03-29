import React, { useRef, useState, useEffect } from 'react';
import * as tmImage from '@teachablemachine/image';
import Webcam from 'react-webcam';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default function detector() {
  const classes = useStyles();
  const webcamRef = useRef(null);

  const [predictions, setPredictions] = useState([]);

  // Main function
  const runCoco = async () => {
    const URL = 'https://teachablemachine.withgoogle.com/models/mVoKauKKR/';
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    const model = await tmImage.load(modelURL, metadataURL);

    setInterval(() => {
      detect(model);
    }, 16.7);
  };

  const detect = async model => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const modelPrediction = await model.predict(video);
      setPredictions(modelPrediction);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className={classes.container}>
      <div>
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            width: 640,
            height: 480,
          }}
        />
      </div>
      <div>
        {predictions.map(
          prediction =>
            prediction.probability >= 0.6 && (
              <h2 key={prediction.className}>
                {prediction.className} : {prediction.probability.toFixed(2)}{' '}
              </h2>
            )
        )}
      </div>
    </div>
  );
}
