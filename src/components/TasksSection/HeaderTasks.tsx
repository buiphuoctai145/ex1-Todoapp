import React from "react";
import BtnAddTask from "../Utilities/BtnAddTask";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { useAppDispatch } from "../../context/hooks";
import { menusActions } from "../../context/Menu.store";

const HeaderTasks: React.FC = () => {
  const dispatch = useAppDispatch();


  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };
  const openMenuAccountHandler = () => {
    dispatch(menusActions.openMenuAccount());
  };

  return (
    <header className="items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex ">
      <button
        className="mr-6 block xl:hidden"
        onClick={openMenuHeaderHandler}
        title="open menu"
      >
        <MenuIcon />
      </button>
      <div className="flex flex-2">
        <BtnAddTask className="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent" />
        <button onClick={openMenuAccountHandler} className="block xl:hidden">
        </button>
      </div>
    </header>
  );
};

export default HeaderTasks;
