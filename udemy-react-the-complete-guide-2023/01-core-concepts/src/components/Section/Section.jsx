// 學習 Building wrapper componenets
// 學習 Forwarding Props
export default function Section({ title, children, ...props }) { // title, child 為 manually extracting props
  return (
    // 這個 ...props 的方式為物件展開 (rest property)，可將元件收到的其他 props 整合成同一個物件一起使用
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
