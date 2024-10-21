import React from 'react';

import {ClockItem} from "@/Models/ClockItem";

import ClockFace from "@/Components/AnalogClock/ClockFace";

import './AnalogClock.css';

export interface AnalogClockProps {
  clock: ClockItem;
}

const AnalogClock = (props: AnalogClockProps) => {
  const angles = props.clock.getAngleTime();

  return (
    <div className="analog-clock">
      <ClockFace/>
      <div className="analog-clock__hour-hand" style={{rotate: `${angles.hours}deg`}}/>
      <div className="analog-clock__minute-hand" style={{rotate: `${angles.minutes}deg`}}/>
      <div className="analog-clock__second-hand" style={{rotate: `${angles.seconds}deg`}}/>
      <div className="analog-clock__dot"/>
    </div>
  )
};

export default AnalogClock;