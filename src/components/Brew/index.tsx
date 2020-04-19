import React, { useState } from "react";
import RecipeService from "../../RecipeService";
import Countdown from "../Countdown";
const styles = require("./index.css");

interface Props {
  recipeId: string;
  onStartOver?: () => void;
}

const Brew: React.SFC<Props> = ({ recipeId, onStartOver }) => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const goToNextStep = () => setStep(step + 1);
  const recipeService = new RecipeService();
  const recipe = recipeService.getById(recipeId);

  if (!recipe) {
    return (
      <div className={styles.container}>
        <p className={styles.step}>Recipe not found</p>
      </div>
    );
  }

  if (!started) {
    return (
      <div className={styles.container} onClick={() => setStarted(true)}>
        <p className={styles.step}>Start</p>
      </div>
    );
  }

  const currentStep = recipe.steps[step];

  if (!currentStep && step === recipe.steps.length) {
    return (
      <div className={styles.container}>
        <p className={styles.step}>Enjoy</p>
        <button onClick={() => onStartOver && onStartOver()}>Start Over</button>
      </div>
    );
  }

  return (
    <div className={styles.container} onClick={goToNextStep}>
      <div className={styles.step}>
        <p>{currentStep.text}</p>
        {currentStep.seconds && (
          <Countdown
            key={step}
            seconds={currentStep.seconds}
            done={goToNextStep}
          />
        )}
      </div>
    </div>
  );
};

export default Brew;
