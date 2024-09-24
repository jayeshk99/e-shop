import { Box, Divider } from "@mui/material";
import { CartItemList } from "../../components/cart/cartItemList";
import { CartSummary } from "../../components/cart/cartSummary";
import "./../../index.css";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_TYPES } from "../../components/cart/config";
import {
  increaseQty,
  decreaseQty,
  deleteCartItem,
} from "../../services/cart/cartSlice";
import { updateCart } from "../../services/cart/cartService";
export const CartComponent = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  console.log("cartState:", cartState);
  const cartItems = cartState.cartItems.map((item, index) => {
    return {
      title: item.name,
      desc: item.desc,
      image: item.imageURL,
      price: item.newPrice,
      oldPrice: item.oldPrice,
      qty:
        cartState.cart.find((element) => element.productId === item._id)
          ?.quantity || 1,
      id: item._id,
    };
  });
  const updateCartHandler = async (productId) => {
    try {
      const cart = cartState.cart;
      const toUpdateCartItem = cart.find(
        (item) => item.productId === productId
      );
      if(toUpdateCartItem){
        const updateResult = await updateCart({...})
      }
    } catch (error) {}
  };
  const cartQtyChangeHandler = async (changeType, productId) => {
    if (changeType === CHANGE_TYPES.INCREASE) {
      dispatch(increaseQty(productId));
    } else if (changeType === CHANGE_TYPES.DECREASE) {
      dispatch(decreaseQty(productId));
    }
  };
  const cartItemDeleteHandler = async (productId) => {
    dispatch(deleteCartItem(productId));
    try {
    } catch (error) {}
  };

  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="space-around">
        <CartItemList
          cartItems={cartItems}
          cartQtyHandler={cartQtyChangeHandler}
          cartItemDeleteHandler={cartItemDeleteHandler}
        />
        <div
          style={{
            height: "100vh",
            border: "1px solid var(--borderColor)",
          }}
        ></div>
        <CartSummary />
      </Box>
    </>
  );
};
