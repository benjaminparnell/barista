import { useRef, useEffect } from "react";

const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const intervalId = setInterval(() => {
        savedCallback.current && savedCallback.current();
      }, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};

export default useInterval;
