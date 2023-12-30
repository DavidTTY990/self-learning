import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // ;(async() => {
  //   const res = await axios.get('https://randomuser.me/api/')
  //   console.log(1, res);
  // })()

  useEffect(() => { // 在初始化時就會觸發
    // 錯誤寫法，useEffect 不該任何東西，除了函式，如果有立即函式要使用，記得直接把完整的函式寫在 useEffect 中，不要寫在 useEffect 的 cb 裡
    (async () => {
      const res = await axios.get("https://randomuser.me/api/");
    })();
  }, []);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </> 
  );
}

export default App;
