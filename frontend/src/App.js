import { RouterProvider } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navBar";
import { HomePage } from "./pages/homePage";
import { router } from "./Routes";
import { useState } from "react";
import { LoginModal } from "./components/loginModal";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
