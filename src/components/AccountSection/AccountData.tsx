import React from "react";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { menusActions } from "../../context/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import DeleteTasks from "./DeleteTasks";
import TasksDone from "./TasksDone";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full">
        <TasksDone />
        <DeleteTasks />
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
