import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

const Cart = () => {
  // const [productCount, setProductCount] = useState(0);
  const { cartContent } = useContext(CartContext);

  return (
    <div>
      <Link to={`CartPage`}>
        <img
          className="cart-img"
          src="../assets/cart-icon.png"
          alt="cart logo"
        />
      </Link>
      <p>{cartContent.itemNumber}</p>
    </div>
  );
};
export default Cart;
