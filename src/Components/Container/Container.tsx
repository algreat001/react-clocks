import React, {useState} from 'react';
import ContainerToolbar from "@/Components/ContainerToolbar/ContainerToolbar";

import './Container.css';
import {ClockProps} from "@/Components/Clock/Clock";
import {ClockItem} from "@/Models/ClockItem";

export interface ContainerProps {
  component: React.FC<ClockProps>;
  clock: ClockItem
}


const Container = (props: ContainerProps) => {
  const [hover, setHover] = useState<boolean>(false);

  const Component = props.component;

  return (
    <div className={`container ${ hover ? 'container__hover': '' }`} onMouseEnter={() => setHover(true)} onMouseLeave={ () => setHover(false)}>
        <ContainerToolbar visible={hover} id={props.clock.id} />
        <Component clock={props.clock} />
    </div>
  );
};

export default Container;