import React from "react";
import { useSelector } from "react-redux";
import WindowMakeTest from ".";
import { IStore } from "../../redux";

interface IWindowMakeTestContainer {
  onClose: (boolean: boolean) => void;
}

const WindowMakeTestContainer: React.FC<IWindowMakeTestContainer> = ({ onClose }) => {
  const test = useSelector((store: IStore) => store.localTest);

  return <WindowMakeTest onClose={onClose} test={test} />;
};

export default WindowMakeTestContainer;
