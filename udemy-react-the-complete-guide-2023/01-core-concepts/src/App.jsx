import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import React from "react";
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </div>
    </>
  );
}

export default App;
