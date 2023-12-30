import { useState } from "react";


const products = [
  {
    id: 1,
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
    stock: 20,
  },
];

function App() {
  const [data, setData] = useState(initData);
  const [newName, setNewName] = useState("");
  const [price, setPrice] = useState();

  return (
    <>
      <input
        type="text"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input type="text" />
      <button type="button">新增</button>
      <table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <>
                <tr key={item.id}></tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
