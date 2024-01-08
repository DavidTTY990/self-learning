export default function TabButton({ onSelect, children }) {
  return (
    <li>
        {/* passing handleSelect as props parameter by the name onSelect */}
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
