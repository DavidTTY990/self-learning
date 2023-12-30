function ShopCart({ carts, handleDeleteCartItem, updateCarts, notes, setNotes, handleCreateOrderReceipt, sum }) {

  return (
    <>
      <div className="col-md-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" width="50">
                操作
              </th>
              <th scope="col">品項</th>
              <th scope="col">描述</th>
              <th scope="col" width="90">
                數量
              </th>
              <th scope="col">單價</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={() => {
                        handleDeleteCartItem(product.id);
                      }}
                    >
                      x
                    </button>
                  </td>
                  <td>{product.name}</td>
                  <td>
                    <small>{product.description}</small>
                  </td>
                  <td>
                    <select className="form-select" value={product.quantity} onChange={(e) => {
                      const value = e.target.value;
                      updateCarts(product, value);
                    }}>
                      {[...Array(10).keys()].map(item => {
                        return (<option value={item + 1} key={item}>{item + 1}</option>)
                      })}
                    </select>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.subTotal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-end mb-3">
          <h5>
            總計: <span>{sum}</span>
          </h5>
        </div>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="備註"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>
        <div className="text-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleCreateOrderReceipt([
                {
                  id: new Date().getTime(),
                  carts: carts,
                  notes: notes,
                  sum: sum,
                },
              ]);
              setNotes('');
            }}
          >
            送出訂單
          </button>
        </div>
      </div>
    </>
  );
}

export default ShopCart;
