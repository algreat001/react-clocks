import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "@/Stores/store";
import {ClockItem} from "@/Models/ClockItem";
import {updateTime} from "@/Stores/clockSlice";

import Container from "@/Components/Container/Container";
import Clock from "@/Components/Clock/Clock";

import './Clocks.css';

const Clocks = () => {
  const clocks = useSelector((state: RootState) => state.clocks.clocks)

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = ClockItem.start(() => dispatch(updateTime({})));
    return () => ClockItem.stop(timer);
  }, [dispatch]);

  return (
    <div className="clocks-container">
      {clocks.map(clock => <Container key={clock.id} clock={clock} component={Clock} />)}
    </div>
  );
};

export default Clocks;