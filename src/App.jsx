import componentImg from "./assets/components.png";
import stateImg from "./assets/state-mgmt.png";
import jsxImg from "./assets/jsx-ui.png";
import configImg from "./assets/config.png";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from './components/Examples/Examples.jsx'

const coreConceptArray = [
  {
    title: "Components",
    description: "Reusable pieces of code",
    img: componentImg,
    field: "components",
  },
  {
    title: "Props",
    description: "Data passed to components",
    img: jsxImg,
    field: "props",
  },
  {
    title: "State",
    description: "Data managed by components",
    img: stateImg,
    field: "state",
  },
  {
    title: "Jsx",
    description: "How to customize React",
    img: configImg,
    field: "jsx",
  },
];

function App() {
  

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        
      </main>
    </>
  );
}

export default App;
