import React from "react";
import { useSelector } from "react-redux";

import WindowMakeTest from ".";
import { State } from "../../redux";

type WindowMakeTestContainerProps  = {
  onClose: (boolean: boolean) => void;
}

const WindowMakeTestContainer: React.FC<WindowMakeTestContainerProps> = ({ onClose }) => {
  const test = useSelector((store: State) => store.localTest);

  return <WindowMakeTest onClose={onClose} test={test} />;
};

export default WindowMakeTestContainer;
