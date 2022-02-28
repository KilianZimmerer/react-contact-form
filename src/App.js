import MultiStepForm from "./MultiStepForm";
import Steps from "./steps.json"

function App() {
  return (
          <MultiStepForm steps={Steps} />
  );
}

export default App;
