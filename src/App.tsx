import * as React from "react";
import TypeSelector from "./TypeSelector";
import RecipeSelector from "./RecipeSelector";
import Brew from "./Brew";
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

      {step === Step.Brew && <Brew recipeId={recipeId} />}
    </div>
  );
};

export default App;
