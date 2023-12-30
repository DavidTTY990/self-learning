import { useState } from "react";
import axios from "axios";

function Assignment() {
  // hook
  const [form, setForm] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const [token, setToken] = useState("");
  const host = "https://todolist-api.hexschool.io";

  // function
  function handleSetForm(e) {
    console.log("handleSetForm");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSetToken(e) {
    console.log("handleSetForm");
    setToken(e.target.value);
    console.log(token);
  }

  function signUp() {
    axios.post(`${host}/users/sign_up`, form).then((res) => {
      console.log(res);
    });
  }

  function login() {
    axios.post(`${host}/users/sign_in`, form).then((res) => {
      console.log(res.data.token);
      setToken(res.data.token);
    });
  }

    // function checkout() {
    //   axios
    //     .get(`${host}/users/checkout`, {
    //       headers: {
    //         Authorization: token,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // }

  const checkout = async () => {
    try {
      const res = await axios.get(`${host}/users/checkout`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
      console.log("此 Token 驗證失敗");
    }
  };

  const signOut = async () => {
    try {
      const res = await axios.post(
        `${host}/users/sign_out`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      setToken("登出錯誤" + err.message);
    }
  };

  return (
    <>
      <div>
        <h2>註冊</h2>
        <div>
          <label htmlFor="">Account</label>
          <input
            type="email"
            id="signUpEmail"
            name="email"
            onChange={(e) => {
              handleSetForm(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            id="signUpPassword"
            name="password"
            onChange={(e) => {
              handleSetForm(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Nickname</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            onChange={(e) => {
              handleSetForm(e);
            }}
          />
        </div>
        <div>
          <button onClick={() => signUp()}>註冊</button>
        </div>
      </div>
      <hr />
      <div>
        <h2>登入</h2>
        <div>
          <label htmlFor="">Account</label>
          <input
            type="email"
            id="loginEmail"
            name="email"
            onChange={(e) => {
              handleSetForm(e);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            onChange={(e) => {
              handleSetForm(e);
            }}
          />
        </div>
        <div>
          <button onClick={() => login()}>登入</button>
        </div>
      </div>
      <hr />
      <div>
        <h2>驗證</h2>
        <div>
          <label htmlFor="">Token</label>
          <input
            type="text"
            id="token"
            name="authorization"
            onChange={(e) => {
              handleSetToken(e);
            }}
          />
        </div>
        <div>
          <button onClick={() => checkout()}>Checkout</button>
        </div>
      </div>
      <hr />
      <div>
        <h2>登出</h2>
        <button onClick={() => signOut()}>使用者登出</button>
        <div>{token}</div>
      </div>
    </>
  );
}

export default Assignment;
