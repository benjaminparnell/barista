import React, { useState } from "react";
import useRecipeService from "../../RecipeService/useRecipeService";
import Countdown from "../Countdown";
import Step from "./Step";
const styles = require("./index.css");

interface Props {
  recipeId: string;
  cupAmount: number;
  onStartOver?: () => void;
}

const Brew: React.SFC<Props> = ({ recipeId, onStartOver, cupAmount }) => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const goToNextStep = () => setStep(step + 1);
  const recipeService = useRecipeService();
  const recipe = recipeService.getById(recipeId);

  if (!recipe) {
    return <Step text="Recipe not found" />;
  }

  if (!started) {
    return <Step text="Start" onClick={() => setStarted(true)} />;
  }

  const currentStep = recipe.steps[step];

  if (!currentStep && step === recipe.steps.length) {
    return (
      <Step text="Enjoy">
        <button
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

export default Brew;
