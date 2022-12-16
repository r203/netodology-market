import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.productsList.productsList)

  return (
    <ul className="product_list">
      {products
        .map(product => {
          return (
            <li key={product.id.toString()} className="item">
              <div className="name">
                {product.oldPrice > 0 && product.oldPrice > product.price
                  ? <span className="discount">{Math.ceil(100 - (product.price * 100 / product.oldPrice))}%</span>
                  : null}
              </div>
              <div className="image"><img src={product.mainImage} alt={product.productName} /></div>
              <div className="price-container">
                <span className="price">{product.price} ₽</span>
                {product.oldPrice > 0
                  ? <span className="old-price">{product.oldPrice} ₽</span>
                  : null}
              </div>
              <div className="product-name">{product.productName}</div>
            </li>
          )
        })}
    </ul>
  )
}

export default ProductList;