import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { coreConceptsData } from "../data/data";
import React from "react";

const tabBtnData = ["components", "jsx", "props", "state"];

function App() {
  const [btnContent, setBtnContent] = useState("Please Select a Subject");
  // btnContent = 'Please Select a Subject'
  function handleSelect(selectedBtn) {
    tabBtnData.forEach((item) => {
      if (item === selectedBtn) {
        console.log(`${item} is being clicked!`);
        setBtnContent(item)
      }
    });
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
              <CoreConcepts {...coreConceptsData[0]} />
              <CoreConcepts {...coreConceptsData[1]} />
              <CoreConcepts {...coreConceptsData[2]} />
              <CoreConcepts {...coreConceptsData[3]} />
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu>
              {/* Learning Children Props and passing function as props parameters */}
              <TabButton
                onSelect={function () {
                  handleSelect(tabBtnData[0]);
                }}
              >
                Components
              </TabButton>
              <TabButton
                onSelect={function () {
                  handleSelect(tabBtnData[1]);
                }}
              >
                JSX
              </TabButton>
              <TabButton onSelect={() => handleSelect(tabBtnData[2])}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect(tabBtnData[3])}>
                State
              </TabButton>
            </menu>
            {/* Dynamic Content */}
            {btnContent}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
