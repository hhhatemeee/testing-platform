import { forwardRef, useState, useImperativeHandle, ReactElement, JSXElementConstructor } from "react";
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
