import { useState } from 'react';
import { useEffect } from 'react';
import LeftMenu from "./component/LeftMenu";
import ShopCart from "./component/ShopCart";
import OrderList from './component/OrderList';

const initialData = [
  {
    id: 1,
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
  },
  {
    id: 4,
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
  },
  {
    id: 7,
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
  },
];

function Assignment() {
  const [carts, setCarts] = useState([]);
  const [orderReceipt, setOrder] = useState([]);
  const [notes, setNotes] = useState("");
  const [sum, setSum] = useState([]);
  

  // 處理加入購物車
  const handleAddToCarts = (product) => {
    setCarts([
      ...carts, {
        ...product,
        id: new Date().getTime(),
        quantity: 1,
        subTotal: product.price,
      }
    ])
  }

  // 新增購物車品項數量，並計算總額
  const updateCarts = (item, value) => {
    const newCart = carts.map((cartItem) => {
      if(cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: parseInt(value),
          subTotal: cartItem.price * parseInt(value),
        }
      }
      return cartItem;
    })
    setCarts(newCart);
  }

  // 處理刪除購物車品項
  const handleDeleteCartItem = (id) => {
    const newCart = carts.filter((product) => {
      return product.id !== id;
    });
    setCarts(newCart);
  }

  // 處理訂單
  const handleCreateOrderReceipt = () => {
    setOrder({
      id: new Date().getTime(),
      carts,
      notes,
      sum
    })
    setNotes('');
    setCarts([]);
  }

  useEffect(() => {
    const total = carts.reduce((pre, curr) => {
      return pre + curr.subTotal
    }, 0)
    setSum(total);
  }, [carts])

  return (
    <>
      <div id="root">
        <div className="container mt-5">
          <div className="row">
            <LeftMenu initialData={initialData} handleAddToCarts={handleAddToCarts} />
            <ShopCart
              carts={carts}
              updateCarts={updateCarts}
              notes={notes}
              setNotes={setNotes}
              handleDeleteCartItem={handleDeleteCartItem}
              handleCreateOrderReceipt={handleCreateOrderReceipt}
              sum={sum}
            />
          </div>
          <hr />
          <div className="row justify-content-center">
            <OrderList 
              orderReceipt={orderReceipt}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignment;
