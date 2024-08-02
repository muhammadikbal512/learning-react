import { useState } from "react";
import Section from "../../Shared/Section.jsx";
import { EXAMPLES, CORE_CONCEPTS } from "../../data";
import TabButton from "../TabButton/TabButton.jsx";
import Tabs from "../../Shared/Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>PLease select a topic</p>;
  const buttons = (
    <>
      {CORE_CONCEPTS.map((core, index) => (
        <TabButton
          isSelected={selectedTopic === core.field}
          onClick={() => clickHandle(core.title)}
          key={index}
        >
          {core.title}
        </TabButton>
      ))}
    </>
  );

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function clickHandle(selectedButton) {
    const newStr = selectedButton.toLowerCase();
    setSelectedTopic(newStr);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={buttons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}
