import * as React from "react";
import TypeSelector from "./components/TypeSelector";
import RecipeSelector from "./components/RecipeSelector";
import Brew from "./components/Brew";
import { Step, BrewType } from "./types";

const App = () => {
  const [step, setStep] = React.useState<Step>(Step.SelectBrewType);
  const [brewType, setBrewType] = React.useState<BrewType>();
  const [recipeId, setRecipeId] = React.useState("");
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
            setStep(Step.Brew);
            setRecipeId(id);
          }}
        />
      )}

      {step === Step.Brew && (
        <Brew
          recipeId={recipeId}
          onStartOver={() => setStep(Step.SelectBrewType)}
        />
      )}
    </div>
  );
};

export default App;
