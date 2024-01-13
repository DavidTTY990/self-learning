import './CoreConcepts.css'
// 直接使用 object key 來取值，傳入時需要先展開 object 
export default function CoreConcepts({image, title, description, alt}) {
  return (
    <li>
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
