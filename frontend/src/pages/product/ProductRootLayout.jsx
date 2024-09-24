import { Outlet } from "react-router";
import { ProductPage } from "./productPage";

function ProductRootLayout() {
  return (
    <>
      {/* <ProductPage /> */}
      <Outlet />
    </>
  );
}

export default ProductRootLayout;
