import CoreConcept from "./CoreConcept"
import { coreConceptsData } from "../../../data/data"

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {/* Learning Props */}
              { coreConceptsData.map((coreConceptsData) => {
                return <CoreConcept key={coreConceptsData.title} {...coreConceptsData} />
              }) }
            </ul>
          </section>
    )
}