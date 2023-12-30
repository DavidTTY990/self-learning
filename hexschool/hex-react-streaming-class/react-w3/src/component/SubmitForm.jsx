import { useState } from "react";

function SubmitForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    nickName: "",
    people: [],
  });

  function handleChecked(e) {
    // 這段非常複雜，但簡單來說，要達到的目的就是要透過 input 裡的 name 屬性來完成 form 物件裡 people 的陣列內容
    console.log(e.target.name)
    if (e.target.checked) {
      setForm({...form, [e.target.name]: [...form[e.target.name], e.target.value]});
    } else {
      // setForm(form.checkList.filter((item) => item !== e.target.value));
      setForm({...form, [e.target.name]: form[e.target.name].filter((item) => item !== e.target.value)})
    }
  }

  function handleInput(e) {
    console.log(e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.name,
    });
  }
  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </div>
      <div>{form.email}</div>
      <div>
        <label htmlFor="password">PW</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <div>{form.password}</div>
      </div>
      <hr />
      <div>
        <div>
          CheckList 陣列內容：<p style={{ margintRight: 10 }}>{form.people.toString()}</p>
        </div>
        <input
          type="checkbox"
          value="david"
          id="check1"
          name="people"
          onChange={(e) => {
            handleChecked(e);
          }}
        />
        <label htmlFor="check1" style={{ marginRight: 10 }}>
          david
        </label>
        <input
          type="checkbox"
          value="vera"
          id="check2"
          name="people"
          onChange={(e) => {
            handleChecked(e);
          }}
        />
        <label htmlFor="check2" style={{ marginRight: 10 }}>
          vera
        </label>
        <input
          type="checkbox"
          value="solar"
          id="check3"
          name="people"
          onChange={(e) => {
            handleChecked(e);
          }}
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
