import { useState } from "react";
import TestProps2 from "./TestProps2";

function TestProps1() {
  const [text, setText] = useState("大衛")
  const [text2, setText2] = useState("喜歡 Vera")
  return (
    <>
      <TestProps2 text={text} setText={setText}/> 
      <TestProps2 text={text2} setText={setText2}/>
      {/* ＊前內後外＊ */}
      外層的：{text}
    </>
  );
}

export default TestProps1;