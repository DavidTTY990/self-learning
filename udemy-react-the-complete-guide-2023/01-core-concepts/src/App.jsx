import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { coreConceptsData, EXAMPLES } from "../data/data";
import React from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  let tabContent;
  
  if(!selectedTopic) {
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
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {/* Learning Props */}
              { coreConceptsData.map((coreConceptsData) => {
                return <CoreConcepts key={coreConceptsData.title} {...coreConceptsData} />
              }) }
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              {/* Learning Children Props and passing function as props parameters */}
              <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>
                Components
              </TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>
                JSX
              </TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>
                Props
              </TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>
                State
              </TabButton>
            </menu>
            {/* Dynamic Content */}
            {tabContent}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
