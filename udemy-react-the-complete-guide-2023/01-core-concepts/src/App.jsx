import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { coreConceptsData } from "../data/data";

function App() {
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
              {/* Learning Children Props */}
              <TabButton>Components</TabButton>
            </menu>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
