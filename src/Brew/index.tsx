import * as React from "react";
import RecipeService from "../RecipeService";

interface Props {
  recipeId: string;
}

const Brew: React.SFC<Props> = ({ recipeId }) => {
  const [started, setStarted] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const recipeService = new RecipeService();
  const recipe = recipeService.getById(recipeId);

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  if (!started) {
    return <div onClick={() => setStarted(true)}>Start</div>;
  }

  const currentStep = recipe.steps[step];

  if (!currentStep && step === recipe.steps.length) {
    return <div>Enjoy</div>;
  }

  return <div onClick={() => setStep(step + 1)}>{currentStep.text}</div>;
};

export default Brew;
