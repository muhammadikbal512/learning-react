import { useState } from "react";
import componentImg from "./assets/components.png";
import stateImg from "./assets/state-mgmt.png";
import jsxImg from "./assets/jsx-ui.png";
import configImg from "./assets/config.png";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

const coreConceptArray = [
  {
    title: "Components",
    description: "Reusable pieces of code",
    img: componentImg,
  },
  {
    title: "Props",
    description: "Data passed to components",
    img: jsxImg,
  },
  {
    title: "State",
    description: "Data managed by components",
    img: stateImg,
  },
  {
    title: "Jsx",
    description: "How to customize React",
    img: configImg,
  },
];

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function clickHandle(selectedButton) {
    const newStr =
      selectedButton.charAt(0).toLowerCase() + selectedButton.slice(1);
    setSelectedTopic(newStr);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {coreConceptArray.map((core, index) => (
              <CoreConcept
                key={index}
                title={core.title}
                description={core.description}
                img={core.img}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {coreConceptArray.map((core, index) => (
              <TabButton onSelect={() => clickHandle(core.title)} key={index}>
                {core.title}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;