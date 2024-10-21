import React from 'react';

import './ContainerToolbar.css';
import {clockAdd, clockRemove} from "@/Stores/clockSlice";
import {useDispatch} from "react-redux";

interface ContainerToolbarProps {
  id: string
  visible: boolean;
}

const ContainerToolbar = (props: ContainerToolbarProps) => {
  const dispatch = useDispatch()

  function onAdd() {
    dispatch(clockAdd({id: props.id}))
  }
  function onRemove(){
    dispatch(clockRemove({id: props.id}))
  }

  return (
    <div className="container-toolbar" style={{opacity: props.visible ? '1.0' : '0.0'}}>
      <button title='Добавить часы' onClick={onAdd}>+</button>
      <button title='Удалить часы' onClick={onRemove}>-</button>
    </div>
  );
};

export default ContainerToolbar;