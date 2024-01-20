import './TabButton.css'

export default function TabButton({ isSelected, children, ...props }) {
  console.log(props)
  return (
    <li>
        {/* passing handleSelect as props parameter by the name onSelect */}
        {/* set style conditionally */}
        {/* 使用 children 取得元件標籤中的文字內容 */}
      <button className={isSelected ? 'active' : null} {...props}>{children}</button>
    </li>
  );
}
