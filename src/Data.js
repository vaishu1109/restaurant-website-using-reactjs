import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-2.png";
import reviewImage3 from "./assets/images/pic-3.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";
const menu = [
  {
    name:"Tasty Burger with French Fries",
    img: menuImage1,
    price:"$30.33",
    off:"$35.99"
  },
  {
    name:"French Fries with Snaks",
    img: menuImage2,
    price:"$40.11",
    off:"$50.99"
  },
  {
    name:"Pizza With Extra Cheese",
    img: menuImage3,
    price:"$30.50",
    off:"$35.99"
  },
  {
    name:"Dipped Fried Chicken",
    img: menuImage4,
    price:"$50.50",
    off:"$52.99"
  },
  {
    name:"Paneer roll with Drink",
    img: menuImage5,
    price:"$10.50",
    off:"$15.99"
  },
  {
    name:"Hot Coffee ",
    img: menuImage6,
    price:"$5.50",
    off:"$7.99"
  },
];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: productImage1,
    name: "Burger",
  },
  {
    img: productImage2,
    name: "Cup Cake"
  },
  {
    img: productImage3,
    name: "Cup Cake"
  },
];
const review = [
  {
    img: reviewImage1,
    name:"Vaishnavi"
  },
  {
    img: reviewImage2,
    name:"Sneha"
  },
  {
    img: reviewImage3,
    name:"Avni"
  }
];
const blog = [
  {
    img: blogImage1,
  },
  {
    img: blogImage2,
  },
  {
    img: blogImage3,
  },
];
export { menu, cart, product, review, blog };
