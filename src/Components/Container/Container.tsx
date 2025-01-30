import React from 'react';
import ContainerToolbar from "@/Components/ContainerToolbar/ContainerToolbar";

import {ClockProps} from "@/Components/Clock/Clock";
import {ClockItem} from "@/Models/ClockItem";

import './Container.css';

export interface ContainerProps {
  component: React.FC<ClockProps>;
  clock: ClockItem
}


const Container = (props: ContainerProps) => {
  const Component = props.component;

  return (
    <div className="container">
        <ContainerToolbar id={props.clock.id} />
        <Component clock={props.clock} />
    </div>
  );
};

export default Container;