import { useEffect } from "react";

const useResize = (handler) => {
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 650) {
        handler();
      }
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [handler]);
};

export default useResize;
