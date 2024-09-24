import { CartItem } from "./cartItem";

export const CartItemList = ({
  cartItems,
  cartQtyHandler = { cartQtyHandler },
  cartItemDeleteHandler,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "55%",
        flexDirection: "column",
        marginTop: "10vh",
        alignItems: "end",
        gap: "15px",
      }}
    >
      {cartItems &&
        cartItems.length &&
        cartItems.map((item) => (
          <CartItem
            {...item}
            key={item._id}
            cartQtyHandler={cartQtyHandler}
            cartItemDeleteHandler={cartItemDeleteHandler}
          />
        ))}
    </div>
  );
};
