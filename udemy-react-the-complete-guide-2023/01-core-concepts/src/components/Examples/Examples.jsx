import { EXAMPLES } from "../../../data/data";
import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import React from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent;

  if (!selectedTopic) {
    tabContent = "Please Select a Subject!";
  } else {
    tabContent = (
      <>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </>
    );
  }

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  
  return (
    <>
      <Section
        title="Examples"
        id="examples"
        className="examples"
        style={{ marginTop: "20px" }}
      >
        <menu>
          {/* Learning Children Props and passing function as props parameters */}
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {/* Dynamic Content */}
        {tabContent}
      </Section>
      
    </>
  );
}
