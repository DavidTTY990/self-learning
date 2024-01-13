import './TabButton.css'

export default function TabButton({ onSelect, children, isSelected }) {
  return (
    <li>
        {/* passing handleSelect as props parameter by the name onSelect */}
        {/* set style conditionally */}
        {/* 使用 children 取得元件標籤中的文字內容 */}
      <button className={isSelected ? 'active' : null} onClick={onSelect}>{children}</button>
    </li>
  );
}
