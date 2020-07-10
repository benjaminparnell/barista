import React, { useState } from "react";
import { differenceInSeconds } from "date-fns";
import PropTypes from "prop-types";
import useRecipeService from "../../RecipeService/useRecipeService";
import Countdown from "../Countdown";
import Step from "./Step";

const styles = require("./index.css");

interface Props {
  recipeId: string;
  cupAmount: number;
  startTime: Date | undefined;
  onStart: () => void;
  onStartOver?: () => void;
}

const Brew: React.SFC<Props> = ({
  recipeId,
  onStartOver,
  cupAmount,
  startTime,
  onStart,
}) => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const goToNextStep = (): void => setStep(step + 1);
  const recipeService = useRecipeService();
  const recipe = recipeService.getById(recipeId);

  if (!recipe) {
    return <Step text="Recipe not found" />;
  }

  if (!started) {
    return (
      <Step
        text="Start"
        onClick={() => {
          setStarted(true);
          onStart();
        }}
      />
    );
  }

  const currentStep = recipe.steps[step];

  if (!currentStep && step === recipe.steps.length) {
    return (
      <Step text="Enjoy">
        {startTime && (
          <p>Time taken: {differenceInSeconds(new Date(), startTime)}</p>
        )}
        <button
          type="button"
          className={styles.button}
          onClick={() => onStartOver && onStartOver()}
        >
          Start Over
        </button>
      </Step>
    );
  }

  return (
    <Step
      text={
        typeof currentStep.text === "function"
          ? currentStep.text(cupAmount)
          : currentStep.text
      }
      onClick={goToNextStep}
    >
      <div className={styles.step}>
        {currentStep.seconds && (
          <Countdown
            key={step}
            seconds={currentStep.seconds}
            done={goToNextStep}
          />
        )}
      </div>
    </Step>
  );
};

Brew.propTypes = {
  recipeId: PropTypes.string.isRequired,
  cupAmount: PropTypes.number.isRequired,
  startTime: PropTypes.instanceOf(Date).isRequired,
  onStart: PropTypes.func.isRequired,
  onStartOver: PropTypes.func,
};

Brew.defaultProps = {
  onStartOver: () => {},
};

export default Brew;
