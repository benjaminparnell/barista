import React, { useState } from "react";
import PropTypes from "prop-types";
import useInterval from "../../use-interval";

interface Props {
  seconds: number;
  done?: () => void;
}

const once = (fn: () => any): (() => void) => {
  let notCalled = true;
  return (...arguments_: []) => {
    if (notCalled) {
      fn.apply(fn, arguments_);
      notCalled = false;
    }
  };
};

const Countdown: React.FC<Props> = ({ seconds, done }) => {
  const [countdown, setCountdown] = useState(seconds);
  const doneReference = React.useRef(done ? once(done) : undefined);

  useInterval(() => {
    if (countdown - 1 > 0) {
      setCountdown(countdown - 1);
    } else if (doneReference.current) doneReference.current();
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
