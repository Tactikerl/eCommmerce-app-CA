import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="checkout-message">
      <h2>Thank You!</h2>
      <p>
        Your transaction is now complete and will be teleported to your
        imaginary castle somewhere in the aether! If you wish to continue
        browsing the nonexistent merchandise displayed in our store you can{" "}
        <Link to="/">Click Here!</Link>{" "}
      </p>
    </div>
  );
};

export default CheckoutSuccess;
