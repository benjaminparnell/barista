import { useRef, useEffect } from "react";

const useInterval = (callback: () => void, delay: number): void => {
  const savedCallback = useRef<typeof callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);
    return () => clearInterval(intervalId);
  }, [delay]);
};

export default useInterval;
