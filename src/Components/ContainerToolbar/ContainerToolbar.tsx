import React from 'react';
import {useDispatch} from "react-redux";

import {clockAdd, clockRemove} from "@/Stores/clockSlice";

import './ContainerToolbar.css';

interface ContainerToolbarProps {
  id: string
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
    <div className="container-toolbar">
      <button title='Добавить часы' onClick={onAdd}>+</button>
      <button title='Удалить часы' onClick={onRemove}>-</button>
    </div>
  );
};

export default ContainerToolbar;