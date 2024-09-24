import { Typography } from "@mui/material";
import "./ProductPage.css";
import { FilterTitle } from "../../components/product/filterTitle";
import { SortTab } from "../../components/product/sortTab";
import { Filters } from "../../components/product/filters";
import { ProductGallary } from "../../components/product/ProductGallary";
import { useEffect, useState } from "react";
export const ProductPage = () => {
  // const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // const result = await
  };
  // useEffect(() => {}, []);
  return (
    <>
      <div className="productPage">
        <div className="sideBar">
          <FilterTitle />
          <Filters />
        </div>
        <div className="productsComp">
          <SortTab />
          <ProductGallary name="abc" />
        </div>
      </div>
    </>
  );
};
