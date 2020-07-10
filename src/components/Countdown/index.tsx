import React, { useState } from "react";
import PropTypes from "prop-types";
import useInterval from "../../useInterval";

interface Props {
  seconds: number;
  done?: () => void;
}

const once = (fn: () => any): (() => void) => {
  let notCalled = true;
  return (...args: []) => {
    if (notCalled) {
      fn.apply(fn, args);
      notCalled = false;
    }
  };
};

const Countdown: React.FC<Props> = ({ seconds, done }) => {
  const [countdown, setCountdown] = useState(seconds);
  const doneRef = React.useRef(done ? once(done) : null);

  useInterval(() => {
    if (countdown - 1 > 0) {
      setCountdown(countdown - 1);
    } else if (doneRef.current) doneRef.current();
  }, 1000);

  return <p data-testid="countdown">{countdown}</p>;
};

Countdown.propTypes = {
  seconds: PropTypes.number.isRequired,
  done: PropTypes.func,
};

Countdown.defaultProps = {
  done: () => {},
};

export default Countdown;
