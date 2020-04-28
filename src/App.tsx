import React, { useState } from "react";
import TypeSelector from "./components/TypeSelector";
import RecipeSelector from "./components/RecipeSelector";
import Brew from "./components/Brew";
import { Step, BrewType } from "./types";
import AmountSelector from "./components/AmountSelector";

const App = () => {
  const [step, setStep] = useState<Step>(Step.SelectBrewType);
  const [brewType, setBrewType] = useState<BrewType>();
  const [recipeId, setRecipeId] = useState("");
  const [cupAmount, setCupAmount] = useState(0);
  return (
    <div>
      {step === Step.SelectBrewType && (
        <TypeSelector
          onSelected={(type) => {
            setStep(Step.SelectRecipe);
            setBrewType(type);
          }}
        />
      )}

      {step === Step.SelectRecipe && (
        <RecipeSelector
          brewType={brewType!}
          onSelected={(id) => {
            setStep(Step.SelectAmount);
            setRecipeId(id);
          }}
        />
      )}

      {step === Step.SelectAmount && (
        <AmountSelector
          onSelected={(amount) => {
            setCupAmount(amount);
            setStep(Step.Brew);
          }}
        />
      )}

      {step === Step.Brew && (
        <Brew
          recipeId={recipeId}
          onStartOver={() => setStep(Step.SelectBrewType)}
          cupAmount={cupAmount}
        />
      )}
    </div>
  );
};

export default App;
