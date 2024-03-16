import { Link } from "react-router-dom";

type CartItemProps = {
     cartItem: any
}
const CartItem = ({ cartItem }:CartItemProps) => {
  const { productId, photo, name, price, quantity, stock } = cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
      </article>
    </div>
  )
}

export default CartItem
