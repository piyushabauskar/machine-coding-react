import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export const ProgressBar = ({ progress }) => {
  const [progressVal, setProgressVal] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgressVal(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          //   width: `${progress}%`,
          transform: `translateX(${progressVal - 100}%)`,
          color: `${progressVal < 5 ? "black" : "white"}`,
        }}
        role="progressbar"
        aria-valuenow={progressVal}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progressVal}%
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
