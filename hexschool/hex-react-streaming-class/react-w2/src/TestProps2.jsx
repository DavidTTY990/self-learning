import PropType from "prop-types";

TestProps2.propTypes = { // 為 props 指定型別
  text: PropType.string,
  setText: PropType.func
};

function TestProps2({ text, setText }) {
  console.log("props:", text);
  return (
    <div style={{ marginLeft: 100 }}>
      <label htmlFor="text">標題 {text}</label>
      <input
        type="text"
        style={{ marginLeft: 10 }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}


export default TestProps2;
