import React from "react";
import { useSelector } from "react-redux";
import WindowMakeTest from ".";

interface IWindowMakeTestContainer {
  onClose: (boolean: boolean) => void;
}

const WindowMakeTestContainer: React.FC<IWindowMakeTestContainer> = ({ onClose }) => {
  const tests = useSelector((store) => store.tests);

  return <WindowMakeTest onClose={onClose} tests={tests} />;
};

export default WindowMakeTestContainer;
