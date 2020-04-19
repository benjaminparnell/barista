import React, { useState } from "react";
import useInterval from "../../useInterval";

interface Props {
  seconds: number;
  done?: () => void;
}

const once = (fn: (() => any) | null) => (...args: []) => {
  if (fn) {
    fn.apply(fn, args);
    fn = null;
  }
};

const Countdown: React.SFC<Props> = ({ seconds, done }) => {
  const [countdown, setCountdown] = useState(seconds);
  const doneRef = React.useRef(done ? once(done) : null);

  useInterval(() => {
    if (countdown - 1 > 0) {
      setCountdown(countdown - 1);
    } else {
      if (doneRef.current) doneRef.current();
    }
  }, 1000);

  return <p data-testid="countdown">{countdown}</p>;
};

export default Countdown;
