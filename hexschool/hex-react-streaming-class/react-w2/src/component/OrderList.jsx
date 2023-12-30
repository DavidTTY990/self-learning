function OrderList({ orderReceipt }) {
  return (
    <>
      <div className="col-8">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h5>訂單明細</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">品項</th>
                    <th scope="col">數量</th>
                    <th scope="col">小計</th>
                  </tr>
                </thead>
                <tbody>
                  {orderReceipt?.carts?.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="text-end">
                備註: <span>{orderReceipt.notes}</span>
              </div>
              <div className="text-end">
                <h5>
                  總計: <span>${orderReceipt.sum}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default OrderList;
