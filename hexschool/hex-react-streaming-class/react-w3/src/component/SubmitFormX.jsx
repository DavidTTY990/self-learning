import { useState } from "react";

function SubmitForm() {
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [checkList, setCheckList] = useState([]);

  function handleChecked(e) {
    if (e.target.checked) {
        setCheckList([...checkList, e.target.value]);
      } else {
        setCheckList(checkList.filter((item) => item !== e.target.value));
      }
  }
  return (
    <>
      <div>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>{email}</div>
      <hr />
      {/* 單選 checkbox 示範 */}
      <div>
        {/* 要使用 toString 才會顯示布林 */}
        <label htmlFor="checkbox">{check.toString()}</label>
        <input type="checkbox" id="check" onChange={(e) => setCheck(!check)} />
      </div>
      <hr />
      {/* 多選 checkbox 示範 */}
      <div>
        <div>CheckList 陣列內容：<p style={{ margintRight: 10}}>{checkList}</p></div>
        <input
          type="checkbox"
          value="david"
          id="check1"
          onChange={(e) => { handleChecked(e) }}
        />
        <label htmlFor="check1" style={{ marginRight: 10 }}>
          david
        </label>
        <input
          type="checkbox"
          value="vera"
          id="check2"
          onChange={(e) => { handleChecked(e) }}
        />
        <label htmlFor="check2" style={{ marginRight: 10 }}>
          vera
        </label>
        <input
          type="checkbox"
          value="solar"
          id="check3"
          onChange={(e) => { handleChecked(e) }}
        />
        <label htmlFor="check3" style={{ marginRight: 10 }}>
          solar
        </label>
        <div>
          <button
            onClick={() => {
              setCheckList([]);
            }}
          >
            Erase checkList
          </button>
        </div>
      </div>
    </>
  );
}

export default SubmitForm;
