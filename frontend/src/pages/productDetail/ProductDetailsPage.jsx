import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import "./../../index.css";
import "./ProductDetailsPage.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const data = [
  {
    _id: "62889e72eea3892919314582",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_1_68a0294f.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_3_28251f9c.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_4_5da34911.jpg?rnd=20200526195200",
    img3: "https://images-static.nykaa.com/fashion-prod-explore/posts/18174190918084653/urls/jqzlnptjkv_245330922_581282936422425_3433585581573493570_n.jpg",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks70_1_68a0294f.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Blue Solid Lehenga And Choli With Dupatta (Set of 3)",
    oldPrice: "4500",
    newPrice: "4050",
    off: 10,
    category: "indian",
    color: "blue",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314583",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_01_857f2b4d.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_02_c612da3d.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_03_226d7613.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_04_fa160568.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks107_01_857f2b4d.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Red Saree With Stitched Blouse (Set of 2)",
    oldPrice: "6499",
    newPrice: "5850",
    off: 10,
    category: "indian",
    color: "red",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931457b",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/9/19aua10784-700501_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/1/9/19aua10784-700501_5.jpg?rnd=20200526195200",
    name: "Aurelia",
    desc: "Blue Round Neck Yarn-Dyed Kurta",
    oldPrice: "1899",
    newPrice: "950",
    off: 50,
    category: "indian",
    color: "blue",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931457d",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/b/dbnset1667blk_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/b/dbnset1667blk_5.jpg?rnd=20200526195200",
    name: "Yufta",
    desc: "Black Solid Kurta With Palazzo & Dupatta (Set of 3)",
    oldPrice: "2999",
    newPrice: "1500",
    off: 50,
    category: "indian",
    color: "black",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
    id: 6,
  },
  {
    _id: "62889e72eea3892919314589",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/n/jne3294-kr.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_1.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_2.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_3.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/n/jne3294-kr_4.jpg?rnd=20200526195200",
    name: "Janasya",
    desc: "Yellow Poly Crepe Kurta",
    oldPrice: "2000",
    newPrice: "500",
    off: 75,
    category: "indian",
    color: "yellow",
    size: ["M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314579",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/k/jkpat3906_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkpat3906_5.jpg?rnd=20200526195200",
    name: "Jaipur Kurti",
    desc: "Yellow Embroidered Straight Handloom Kurta With Pants (Set of 2)",
    oldPrice: "2799",
    newPrice: "1045",
    off: 63,
    category: "indian",
    color: "yellow",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931457c",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-716_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/m/mm-716_5.jpg?rnd=20200526195200",
    name: "MISH",
    desc: "White Midi Dress",
    oldPrice: "2299",
    newPrice: "1380",
    off: 40,
    category: "western",
    color: "white",
    size: ["M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931458c",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/u/summere15562ss20wht_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/u/summere15562ss20wht_5.jpg?rnd=20200526195200",
    name: "Biba",
    desc: "White Printed Kurta With Inner Slip (Set of 2)",
    oldPrice: "2299",
    newPrice: "1150",
    off: 50,
    category: "indian",
    color: "white",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931458d",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/z/_/z_zikury3458_1_a0bd282a.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_2_935d78fc.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_3_1227d728.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_4_ed8e25e3.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/z/_/z_zikury3458_5_00fce311.jpg?rnd=20200526195200",
    name: "Ziyaa",
    desc: "Women's White Color Screen Print Straight",
    oldPrice: "1853",
    newPrice: "834",
    off: 55,
    category: "indian",
    color: "white",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931458e",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/s/ksut12321001_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/k/s/ksut12321001_1.jpg?rnd=20200526195200",
    name: "KSUT",
    desc: "White Checks Kurta",
    oldPrice: "1399",
    newPrice: "621",
    off: 56,
    category: "indian",
    color: "white",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314587",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/e/festive16130aw20yel_1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/e/festive16130aw20yel_5.jpg?rnd=20200526195200",
    name: "Biba",
    desc: "Yellow Printed Kurta",
    oldPrice: "1699",
    newPrice: "1190",
    off: 30,
    category: "indian",
    color: "yellow",
    size: ["M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314580",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_1_ae3828d6.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_2_80b1986e.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_3_0b590652.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_4_3db79504.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_5_f240d5e7.jpg?rnd=20200526195200",
    name: "Label Shaurya Sanadhya",
    desc: "White Polka Dot Ruffle Fit And Flare Short Dress",
    oldPrice: "2700",
    newPrice: "2160",
    off: "20",
    category: "western",
    color: "white",
    size: ["M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931457a",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/y/u/yufekset636bl-1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-3.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/y/u/yufekset636bl-5.jpg?rnd=20200526195200",
    name: "Yufta",
    desc: "Sky Blue Leheriya Dyed Straight Kurta",
    oldPrice: "1499",
    newPrice: "750",
    off: 50,
    category: "indian",
    color: "blue",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314581",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/r/drs04110_1_36fdbaf1.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_2_f5d3c663.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_3_e93f293d.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_4_84120934.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drs04110_5_4376e5e0.jpg?rnd=20200526195200",
    name: "Faballey",
    desc: "Navy Polka Belted Halter Maxi Dress",
    oldPrice: "2600",
    newPrice: "1300",
    off: 50,
    category: "western",
    color: "blue",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314591",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/r/drf501963_1_44cb0348.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_2_9b187897.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_3_ebbcbe3b.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_4_1e444559.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/r/drf501963_5_552618e3.jpg?rnd=20200526195200",
    name: "The Vanca",
    desc: "Women's Blue Solid Flared Dress",
    oldPrice: "2299",
    newPrice: "1035",
    off: 55,
    category: "western",
    color: "blue",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314578",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/a/fablestreet_dr529whit_1_1d0d6579.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_2_bde13ad2.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_3_3adc6465.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_4_5fd4b2ee.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/a/fablestreet_dr529whit_5_0cf36974.jpg?rnd=20200526195200",
    name: "FableStreet",
    desc: "Cotton Drop Shoulder Oversized Shirt Dress - White",
    oldPrice: "2995",
    newPrice: "2696",
    off: 10,
    category: "western",
    color: "white",
    size: ["M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea3892919314590",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/0/d01437_1_37a0885e.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_2_ac7c55c5.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_3_2774c5c5.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_4_224150fa.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/0/d01437_5_cdc869e5.jpg?rnd=20200526195200",
    name: "Zink London",
    desc: "Women's Blue Polka Dots Dress",
    oldPrice: "2249",
    newPrice: "1125",
    off: 50,
    category: "western",
    color: "blue",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea389291931459f",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/s/cssportb03greymilange_1_480f8fc2.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_2_ef0d5fe5.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_3_e2302af0.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_4_8e076eb4.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/s/cssportb03greymilange_1_480f8fc2.jpg?rnd=20200526195200",
    name: "Candyskin",
    desc: "Women's High Impact Cotton Padded Wirefree Sports Bra - Grey",
    oldPrice: "1499",
    newPrice: "960",
    off: "36",
    category: "sports",
    color: "grey",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea38929193145ac",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/e/p/ep-07-107_1_7022f200.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_2_04f33850.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_3_74e0dff9.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_4_996c872a.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/e/p/ep-07-107_2_04f33850.jpg?rnd=20200526195200",
    name: "Empress Pitara",
    desc: "EMPRESS PITARA Deep Red Brocade Kurta And Pant With Dupatta (Set of 3)",
    oldPrice: "5600",
    newPrice: "5040",
    off: 10,
    category: "indian",
    color: "Red",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
  {
    _id: "62889e72eea38929193145b5",
    imageURL:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/b/lbl101ks112_1_574fb31c.jpg?rnd=20200526195200",
    img1: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_2_c4e9dfff.jpg?rnd=20200526195200",
    img2: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_3_46335760.jpg?rnd=20200526195200",
    img3: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_4_257f049e.jpg?rnd=20200526195200",
    img4: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/l/b/lbl101ks112_1_574fb31c.jpg?rnd=20200526195200",
    name: "Lavanya The Label",
    desc: "Yellow Peplum Skirt Dupatta (Set of 3)",
    oldPrice: "6500",
    newPrice: "3750",
    off: 50,
    category: "indian",
    color: "yellow",
    size: ["XS", "S", "M", "L", "XL", "2XL"],
  },
];

export const ProductDetails = (props) => {
  const [selectedSize, setSelectedSize] = useState();
  const [isSizeSelectedError, setIsSizeSelectedError] = useState(false);
  if (selectedSize) console.log("selected");
  if (!selectedSize) console.log("not selected");
  const { productId } = useParams();
  const product = data.find((data) => data._id === productId);
  console.log("productLabel:", product);
  const imageUrls = Object.keys(product)
    .filter((key) => key.includes("img"))
    .map((key) => product[key]);

  const handleSizeSelection = (newSize) => {
    setSelectedSize(newSize === selectedSize ? null : newSize);
    setIsSizeSelectedError(false);
  };
  const addToCartButtonHandler = () => {
    if (!selectedSize) {
      setIsSizeSelectedError(true);
    }
  };
  return (
    <>
      <Grid container sx={{ padding: "5%", columnGap: "1%" }}>
        <Grid item xs={1} sx={{}}>
          {imageUrls.map((url) => (
            <Box
              component="img"
              sx={{
                width: "100%",
                padding: "5px",
                border: `1px solid var(--borderColor)`,
              }}
              src={url}
            />
          ))}
        </Grid>
        <Grid item xs={4.7} sx={{}}>
          <Box
            component="img"
            sx={{
              width: "100%",
              padding: "5px",
              border: `1px solid var(--borderColor)`,
            }}
            src={product.imageURL}
          />
        </Grid>
        <Grid item xs={5.5} sx={{ paddingLeft: "30px" }}>
          <Typography
            variant="h5"
            gutterBottom={true}
            sx={{ fontWeight: "bold" }}
          >
            {product.name}
          </Typography>
          <Typography
            gutterBottom={true}
            marginBottom="26px"
            variant="subtitle2"
          >
            {product.desc}
          </Typography>
          <Divider sx={{ marginBottom: "26px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              margin: 0,
              padding: 0,
              alignItems: "end",
              marginBottom: "26px",
            }}
          >
            <Typography
              variant="h5"
              style={{
                marginRight: "10px",
              }}
            >
              Rs.{product.oldPrice}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              Rs.{product.newPrice}
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "red", marginLeft: "10px" }}
            >
              (
              {Math.round(
                ((product.oldPrice - product.newPrice) / product.oldPrice) * 100
              )}
              % Off)
            </Typography>
          </div>
          <Typography variant="caption" sx={{ fontWeight: "bold" }}>
            SELECT SIZE
          </Typography>
          <Box>
            {product.size.map((size) => (
              <ToggleButton
                value={size}
                size="medium"
                sx={{
                  borderRadius: "50%",
                  marginRight: "5px",
                  width: "55px",
                  height: "55px",
                  "&.Mui-selected": {
                    backgroundColor: `var(--secondary-color)`,
                    color: `var(--primary-color)`,
                  },
                  marginBottom: "26px",
                }}
                selected={selectedSize === size}
                onClick={() => handleSizeSelection(size)}
              >
                {size}
              </ToggleButton>
            ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              sx={{
                color: "var(--primary-color)",
                backgroundColor: "var(--secondary-color)",
                width: "46%",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "var(--secondary-color)",
                },
              }}
              onClick={(e) => {
                addToCartButtonHandler();
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Add to Cart</Typography>
            </Button>

            <Button
              variant="contained"
              startIcon={<FavoriteBorderIcon />}
              sx={{
                color: "var(--textColor)",
                backgroundColor: "var(--primary-color)",
                width: "40%",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "var(--primary-color)",
                  border: "1px solid black",
                },
                marginLeft: "15px",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>wishlist</Typography>
            </Button>
          </Box>
          {isSizeSelectedError && (
            <span style={{ color: "red" }}>Select a size</span>
          )}
        </Grid>
      </Grid>
    </>
  );
};
