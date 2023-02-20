import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import AboutUs from "./Components/AboutUs";
import ShopPage from "./Components/ShopPage";
import Cart from "./Components/Cart";

import monopoly from "./images/monopoly.jpeg";
import eldritchhorror from "./images/eldritchhorror.jpeg";
import yugioh from "./images/yugioh.jpeg";
import chinese_checker from "./images/chinese_checker.jpeg";
import battleship from "./images/battleship.jpeg";
import gomuku from "./images/gomuku.jpeg";

const default_game_list = [
  {
    id: "bg-1",
    name:"Monopoly",
    price: 50,
    rating: 4,
    image_src : {monopoly},
    
  },
  {
    id: "bg-2",
    name:"Eldritch Horror",
    price: 200,
    rating: 3.8,
    image_src : {eldritchhorror},
    
  },
  {
    id: "bg-3",
    name:"Yu-Gi-Oh",
    price: 150,
    rating: 4.3,
    image_src: {yugioh},
    
  },
  {
    id: "bg-4",
    name: "Chinese Checker",
    price: 40,
    rating: 4,
    image_src: {chinese_checker},
    
  },
  {
    id: "bg-5",
    name: "Battleship",
    price: 50,
    rating: 4,
    image_src: {battleship},
    
  },
  {
    id: "bg-6",
    name: "Gomuku",
    price: 30,
    rating: 4,
    image_src: {gomuku},
    
  }
]

const RouteSwitch = () => {
  
  const [number_in_cart, setNumber_in_cart] = useState([0,0,0,0,0,0]);
  // use an array to record the item number for each product in cart 

  const [product_number, setProduct_number] = useState(0);
  const [item_number_sum, setItem_number_sum] = useState(0);
  const [payment, setPayment] = useState(0);

  const changeItemNumberInCart = (id, value)=>{
    const new_number = [];
    const target_id = Number(id.split("-")[1]-1);


    for(let i=0; i<number_in_cart.length; i++)
    {
      if (i!==target_id)
      new_number.push(number_in_cart[i]);
      else
      new_number.push(Number(value));

    }
    setNumber_in_cart(new_number);

  }


  useEffect(
    ()=>{
      let new_product_number = 0;
      let new_item_number_sum = 0;
      let new_payment =0 ;


      for(let i=0; i<number_in_cart.length;i++)
      {
        if(number_in_cart[i]>0)
        new_product_number++;

        new_item_number_sum += number_in_cart[i];
        new_payment += number_in_cart[i] * default_game_list[i].price;
      }
      setProduct_number(new_product_number);
      setItem_number_sum(new_item_number_sum);
      setPayment(new_payment);
      
    }, [number_in_cart]
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="shoppage" 
              element={<ShopPage shop_game_list={default_game_list} 
              changeItemNumberInCart={changeItemNumberInCart} 
              number_in_cart={number_in_cart}  
              product_number={product_number}/>} />
          <Route path="cart" 
              element={<Cart cart_game_list={default_game_list} 
              changeItemNumberInCart={changeItemNumberInCart} 
              number_in_cart={number_in_cart}
              product_number={product_number}
              item_number_sum = {item_number_sum}
              payment = {payment}
              />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;