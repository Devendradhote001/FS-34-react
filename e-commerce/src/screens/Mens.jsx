import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Mens = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      price: 89.99,
    },
    {
      id: 2,
      title: "Organic Avocado Pack",
      category: "Grocery",
      image:
        "https://images.unsplash.com/photo-1573764010626-40d9db60e9f4?w=400&h=400&fit=crop",
      price: 7.99,
    },
    {
      id: 3,
      title: "Cotton T-Shirt White",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      price: 24.99,
    },
    {
      id: 4,
      title: "Running Shoes Blue",
      category: "Footwear",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      price: 129.99,
    },
    {
      id: 5,
      title: "Stainless Steel Water Bottle",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1618418600477-589f8f39c762?w=400&h=400&fit=crop",
      price: 29.99,
    },
    {
      id: 6,
      title: "Yoga Mat Non-Slip",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      price: 39.99,
    },
    {
      id: 7,
      title: "Coffee Mug Ceramic",
      category: "Home",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
      price: 15.99,
    },
    {
      id: 8,
      title: "Notebook A5 Spiral",
      category: "Stationery",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
      price: 9.99,
    },
    {
      id: 9,
      title: 'Backpack Laptop 15"',
      category: "Bags",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      price: 59.99,
    },
    {
      id: 10,
      title: "Smart Watch Fitness",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      price: 199.99,
    },
    {
      id: 11,
      title: "Denim Jeans Slim Fit",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      price: 49.99,
    },
    {
      id: 12,
      title: "Wireless Mouse Ergonomic",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      price: 34.99,
    },
    {
      id: 13,
      title: "Organic Almonds 500g",
      category: "Grocery",
      image:
        "https://images.unsplash.com/photo-1542994893-e9c42a4e2413?w=400&h=400&fit=crop",
      price: 12.99,
    },
    {
      id: 14,
      title: "Sunglasses Polarized",
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      price: 79.99,
    },
    {
      id: 15,
      title: "Cast Iron Skillet",
      category: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=400&h=400&fit=crop",
      price: 44.99,
    },
    {
      id: 16,
      title: "Wireless Earbuds Black",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1579586140647-6998d95d9d1f?w=400&h=400&fit=crop",
      price: 69.99,
    },
    {
      id: 17,
      title: "Sneakers White Canvas",
      category: "Footwear",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      price: 89.99,
    },
    {
      id: 18,
      title: "Leather Wallet Brown",
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      price: 39.99,
    },
    {
      id: 19,
      title: "Desk Lamp LED",
      category: "Home",
      image:
        "https://images.unsplash.com/photo-1581287053821-15a68b1bdfe8?w=400&h=400&fit=crop",
      price: 29.99,
    },
    {
      id: 20,
      title: "Protein Powder Whey",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1612830785185-8fdbff489206?w=400&h=400&fit=crop",
      price: 54.99,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  let getClickedCard = (id) => {
    let clickedCard = products.find((elem) => elem.id === id);
    if (clickedCard) {
      dispatch(addToCart(clickedCard));
    }
  };

  if (isLoading) return <h1 className="text-2xl">Loading data...</h1>;

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {products.map((elem) => (
        <ProductCard
          key={elem.id}
          elem={elem}
          getClickedCard={getClickedCard}
        />
      ))}
    </div>
  );
};

export default Mens;
