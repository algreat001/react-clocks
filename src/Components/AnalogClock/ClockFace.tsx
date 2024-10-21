import React from 'react';
import {timeToAngle} from "@/Helpers/time";

import './AnalogClock.css';

const ClockFace = () => {
  const hours = Array.from({length: 12}, (_, i) => i + 1);

  return (
    <div>
      { hours.map(hour =>
        <div key={hour} className='analog-clock__label' style={{rotate: `${timeToAngle({ hours: hour, minutes: 0, seconds: 0 }).hours}deg` }} />) }
    </div>
  );
};

export default ClockFace;