import React from 'react';

import {ClockItem} from "@/Models/ClockItem";

import './DigitalClock.css';

export interface DigitalClockProps {
  clock: ClockItem;
}

const DigitalClock = (props: DigitalClockProps) => {

  return (
    <div className="digital-clock">
      {props.clock.getFormattedTime()}
    </div>
  );
};

export default DigitalClock;