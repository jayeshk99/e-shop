import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./authService";
import { fetchCart } from "../cart/cartThunk";
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const result = await login({ email, password });
      localStorage.setItem("userToken", result.token);
      dispatch(fetchCart({ userId: result.user._id }));
      return result;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// {
//     "cartQty": 2,
//     "cartItems": [
//         {
//             "_id": "62889e72eea389291931457d",
//             "imageURL": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/b/dbnset1667blk_1.jpg?rnd=20200526195200",
//             "img1": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_2.jpg?rnd=20200526195200",
//             "img2": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_3.jpg?rnd=20200526195200",
//             "img3": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_4.jpg?rnd=20200526195200",
//             "img4": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_5.jpg?rnd=20200526195200",
//             "name": "Yufta",
//             "desc": "Black Solid Kurta With Palazzo & Dupatta (Set of 3)",
//             "oldPrice": "2999",
//             "newPrice": "1500",
//             "off": 50,
//             "category": "indian",
//             "color": "black",
//             "size": [
//                 "XS",
//                 "S",
//                 "M",
//                 "L",
//                 "XL",
//                 "2XL"
//             ],
//             "id": 6
//         },
//         {
//             "_id": "62889e72eea389291931457b",
//             "imageURL": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/9/19aua10784-700501_1.jpg?rnd=20200526195200",
//             "img1": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_2.jpg?rnd=20200526195200",
//             "img2": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_3.jpg?rnd=20200526195200",
//             "img3": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_4.jpg?rnd=20200526195200",
//             "img4": "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_5.jpg?rnd=20200526195200",
//             "name": "Aurelia",
//             "desc": "Blue Round Neck Yarn-Dyed Kurta",
//             "oldPrice": "1899",
//             "newPrice": "950",
//             "off": 50,
//             "category": "indian",
//             "color": "blue",
//             "size": [
//                 "XS",
//                 "S",
//                 "M",
//                 "L",
//                 "XL",
//                 "2XL"
//             ]
//         }
//     ],
//     "cart": [
//         {
//             "_id": "6639ac2b098438b06c1f7fb0",
//             "productId": "62889e72eea389291931457d",
//             "userId": "662005ddeffba726be45bcba",
//             "quantity": 1,
//             "createdAt": "2024-05-07T04:20:59.019Z",
//             "updatedAt": "2024-08-13T05:56:53.760Z"
//         },
//         {
//             "_id": "663b2889aa1b1717730e707c",
//             "productId": "62889e72eea389291931457b",
//             "userId": "662005ddeffba726be45bcba",
//             "quantity": 1,
//             "createdAt": "2024-05-08T07:23:53.066Z",
//             "updatedAt": "2024-08-13T05:56:51.829Z"
//         }
//     ],
//     "itemQty": [
//         1,
//         1
//     ]
// }
