import PropType from 'prop-types'

function LeftMenu({initialData, handleAddToCarts}) {
  
  return (
    <>
      <div className="col-md-4">
        <div className="list-group">
          {initialData.map((product) => {
            return (
              <a
                href="#"
                className="list-group-item list-group-item-action"
                key={product.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCarts(product);
                }}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{product.name}</h5>
                  <small>{product.price} 元</small>
                </div>
                <p className="mb-1">{product.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

LeftMenu.propTypes = {
  initialData: PropType.array.isRequired,
  handleAddToCarts: PropType.func,
};

export default LeftMenu;
