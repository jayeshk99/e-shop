import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductTile } from "./productTile";
import { NavLink } from "react-router-dom";

export const ProductGallary = (props) => {
  console.log("props:", props);
  const [products, setProducts] = useState([]);
  console.log("inside product gallary");
  useEffect(() => {
    console.log("inside useeffect");
    const fetchProducts = async () => {
      const productsRes = await fetch("http://localhost:3002/products/women");
      const productsList = await productsRes.json();
      setProducts(productsList.products);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Box
        //   height="25vh"
        width="100%"
        my={4}
        // gap={4}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        p={2}
        sx={{ border: `1px solid var(--borderColor)` }}
        margin="0"
      >
        {!products.length ? (
          <></>
        ) : (
          products.map((product) => (
            <ProductTile
              title={product.name}
              image={product.imageURL}
              price={product.newPrice}
              oldPrice={product.oldPrice}
              id={product._id}
            />
          ))
        )}
      </Box>
    </>
  );
};
