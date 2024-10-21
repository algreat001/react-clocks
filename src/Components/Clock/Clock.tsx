import React from 'react';

import {ClockItem} from "@/Models/ClockItem";

import AnalogClock from "@/Components/AnalogClock/AnalogClock";
import DigitalClock from "@/Components/DigitalClock/DigitalClock";
import SelectTimeZone from "@/Components/SelectTimeZone/SelectTimeZone";

export interface ClockProps {
  clock: ClockItem
}

const Clock = (props: ClockProps) => {

  return (
    <>
      <AnalogClock clock={props.clock} />
      <DigitalClock clock={props.clock} />
      <SelectTimeZone clock={props.clock} />
    </>
  );
};

export default Clock;