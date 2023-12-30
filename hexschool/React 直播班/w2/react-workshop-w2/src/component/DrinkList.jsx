function DrinkList({ props }) {
  console.log(props.productList);
  return (
    <div className="col-md-4">
      <div className="list-group">
        {props.productList.map((item) => {
          return (
              <a href="#" className="list-group-item list-group-item-action" key={item.id}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{item.name}</h5>
                  <small>{item.price}</small>
                </div>
                <p className="mb-1">{item.discription}</p>
              </a>
          );
        })}
      </div>
    </div>
  );
}

export default DrinkList;
