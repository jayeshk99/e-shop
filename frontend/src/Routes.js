import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { HomePage } from "./pages/homePage";
import ProductRootLayout from "./pages/product/ProductRootLayout";
import { ProductPage } from "./pages/product/productPage";
import { ProductDetails } from "./pages/productDetail/ProductDetailsPage";
import { CartComponent } from "./pages/cart/CartPage";
import { ProtectedRoute } from "./protectedRoute";
import { LoginModal } from "./components/loginModal";
import { LoginPage } from "./pages/loginPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: ":category",
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
          {
            path: ":productId",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <CartComponent />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
