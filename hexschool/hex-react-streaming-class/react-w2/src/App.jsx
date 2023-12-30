import { useState, useEffect } from "react";
import "./App.css";

const initialData = [
  {
    id: 1,
    name: "莊園美式",
    price: 70,
  },
  {
    id: 2,
    name: "特濃拿鐵",
    price: 120,
  },
  {
    id: 3,
    name: "傳統抹茶那提",
    price: 150,
  },
  {
    id: 4,
    name: "超濃巧克力星冰樂",
    price: 200,
  },
];

function App() {
  const [data, setData] = useState(initialData);
  const [newName, setName] = useState("");
  const [newPrice, setPrice] = useState("");
  const [total, setTotal] = useState(0)

  // useEffect 帶入的參數：cb, condition(監聽的變化)
  // 製作 data 金額的加總功能，使用 reduce()
  useEffect(() => {
    setTotal(data.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0))
  }, [data])

  return (
    <>
      <input
        type="text"
        value={newName}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        value={newPrice}
        onChange={(e) => {
          setPrice(parseInt(e.target.value, 10));
        }}
      />{" "}
      <button
        type="button"
        onClick={() => {
          const newData = [...data];
          newData.push({
            id: newData.length + 1,
            name: newName,
            price: newPrice,
          });
          setData(newData);
          setName("");
          setPrice("");
        }}
      >
        新增資料
      </button>
      <table>
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
            <th style={{ paddingLeft: 50, }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      const newData = data.filter((newItem) => {
                        return newItem.id !== item.id;
                      });
                      setData(newData);
                    }}
                    style={{ marginLeft: 50 }}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Total:</td>
            <td>{total}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
