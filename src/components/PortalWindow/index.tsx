import { forwardRef, useState, useImperativeHandle, ReactElement, JSXElementConstructor, useEffect } from "react";
import ReactDOM from "react-dom";

import { usePortal } from "../../hooks/usePortal";

type PortalHandleProps = {
  addWindow: (window: JSX.Element) => void;
};

type PortalProps = {
  isOpen: boolean;
  modal: JSX.Element;
};

export const PortalWindow = forwardRef<PortalHandleProps, PortalProps>((
  {
    isOpen,
    modal,
  }: PortalProps, ref): ReactElement<any, string | JSXElementConstructor<any>> | null => {
  const [window, setWindow] = useState<JSX.Element>(modal);
  const { loaded, portalId } = usePortal();
  
  useEffect(() => {
    if (!isOpen) {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
      return;
    }
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

  }, [isOpen]);

  
  useEffect(() => {
    setWindow(modal);
  },[modal.props])
  
  useImperativeHandle(ref, () => ({
    addWindow(window: JSX.Element) {
      setWindow(window);
    },
  }))

  if (!isOpen) {
    return null;
  }
  
  if(loaded){
  }
  
  return loaded
    ? ReactDOM.createPortal(
      window,
      document.getElementById(portalId)!,
    )
    : <></>
});
