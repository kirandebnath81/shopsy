import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const nodeRef = useRef();

  useEffect(() => {
    const mouseDownHandler = (event) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target)) {
        handler();
      }
    };

    window.addEventListener("mousedown", mouseDownHandler);

    return () => {
      window.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [handler]);

  return nodeRef;
};

export default useClickOutside;
