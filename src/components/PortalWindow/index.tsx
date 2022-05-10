import { forwardRef, useState, useImperativeHandle, ReactElement, JSXElementConstructor } from "react";

import ReactDOM from "react-dom";
import { uuid } from "../../helpers";
import { usePortal } from "../../hooks/usePortal";

interface IPortalHandle {
  addWindow: (window: JSX.Element) => void;
};

interface IPortal {
  isOpen: boolean;
  modal: JSX.Element;
};

export const PortalWindow = forwardRef<IPortalHandle, IPortal>((
  {
    isOpen,
    modal,
  }: IPortal, ref): ReactElement<any, string | JSXElementConstructor<any>> | null => {
  const [window, setWindow] = useState<JSX.Element>(modal);
  console.log(isOpen);
  const { loaded, portalId } = usePortal();

  useImperativeHandle(ref, () => ({
    addWindow(window: JSX.Element) {
      setWindow(window);
    },
  }))

  if (!isOpen) {
    return null;
  }

  return loaded
    ? ReactDOM.createPortal(
      window,
      document.getElementById(portalId)!,
    )
    : <></>
});