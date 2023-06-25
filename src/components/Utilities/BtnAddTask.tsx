import React from "react";
import { useAppDispatch } from "../../context/hooks";
import { modalActions } from "../../context/Modal.store";

const BtnAddTask: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalCreateTask());
  };
  return (
    <>
      <button className={`btn  ${className}`} onClick={onOpenModal}>
        Add new task
      </button>
    </>
  );
};

export default BtnAddTask;
