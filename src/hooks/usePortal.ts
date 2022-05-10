import { useEffect, useState } from "react";
import { uuid } from "../helpers/index";

interface IUseToast {
  loaded: boolean;
  portalId: string;
}

/**
 * Custom hook for creating a portal fot toasts
 * @type {UseToastPortal}
 */
export function usePortal(): IUseToast {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [portalId] = useState<string>(`portal-${uuid()}`);

  useEffect(() => {
    const div: HTMLDivElement = document.createElement('div');

    div.id = portalId;
    document.getElementsByTagName('body')[0].prepend(div);

    setLoaded(true);

    return (): any => document.getElementsByTagName('body')[0].removeChild(div);
  }, [portalId]);

  return { loaded, portalId };
}