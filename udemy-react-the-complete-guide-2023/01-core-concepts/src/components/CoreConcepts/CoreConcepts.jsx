import './CoreConcepts.css'

export default function CoreConcepts({image, title, description, alt}) {
  return (
    <li>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
