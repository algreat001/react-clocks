import React from 'react';

import {ClockItem, timeZones} from "@/Models/ClockItem";

import './SelectTimeZone.css';
import {useDispatch} from "react-redux";
import {changeTimeZone} from "@/Stores/clockSlice";


interface SelectTimeZoneProps {
  clock: ClockItem;
}

const SelectTimeZone = (props: SelectTimeZoneProps) => {
  const dispatch = useDispatch();

  function onSelect(timezone: string) {
    dispatch(changeTimeZone({ id: props.clock.id, timezone }));
  }

  return (
    <div>
      <select className="select" value={props.clock.timeZone.timezone} onChange={e => onSelect(e.target.value)}>
        {timeZones.map(tz => <option key={tz.name} value={tz.timezone}>{tz.name}</option>)}
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default SelectTimeZone;