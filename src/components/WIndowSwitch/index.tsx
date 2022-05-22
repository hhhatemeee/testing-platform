import React from "react";

import { WindowSwitchName } from "../../shared/types";
import WindowMakeQuestion from "../WindowMakeQuestion";
import WindowMakeTestContainer from "../WindowMakeTest/container";

type WindowSwitchProps = {
  onClose: (boolean: boolean) => void;
  windowName: WindowSwitchName;
}

const WindowSwitch:React.FC<WindowSwitchProps> = ({onClose, windowName}) => {
  let window:JSX.Element | null = null;
  
  switch(windowName){
    case 'test':
      window = <WindowMakeTestContainer onClose={onClose}/>
      break;
    case 'question':
      window = <WindowMakeQuestion onClose={onClose}/>;
      break;    
  }
  
  if(!window){
    return <></>;
  }
  
  return window;
};

export default WindowSwitch;
