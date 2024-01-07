import reactEssentialImg from '../../assets/react-core-concepts.png';
import "./header.css"

const reactDescriptions = ['Fundamental', 'Essentials', 'Crucial'];

function genRandomInt(max) {
    return Math.floor(Math.random() * max)
}

export default function Header() {
    const dynamicDescriptions = reactDescriptions[genRandomInt(reactDescriptions.length)]

    return (
      <header>
        <img src={reactEssentialImg} alt="Stylized atom" />
        <h1>React Essential</h1>
        <p>
          {dynamicDescriptions} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }