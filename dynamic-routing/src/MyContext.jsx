import { createContext, useState } from "react";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "Premium noise-cancelling headphones with 30hr battery life",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&fit=crop",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      description: "Latest iPhone with A18 chip and titanium frame",
      price: 99999,
      image:
        "https://images.unsplash.com/photo-1695906326190-1b309ded0d95?w=400&fit=crop",
    },
    {
      id: 3,
      name: "MacBook Air M3",
      description: "Ultra-light laptop with 18hr battery and M3 chip",
      price: 114900,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&fit=crop",
    },
    {
      id: 4,
      name: "Nike Air Max 90",
      description: "Classic running shoes with premium cushioning",
      price: 12999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop",
    },
    {
      id: 5,
      name: "Coffee Maker Pro",
      description: "Automatic espresso machine with 15 bar pressure",
      price: 8499,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&fit=crop",
    },
    {
      id: 6,
      name: "Smart Fitness Tracker",
      description: "Heart rate, sleep & 14-day battery fitness band",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1570979148499-6e186fddacdf?w=400&fit=crop",
    },
    {
      id: 7,
      name: "4K Smart TV 55-inch",
      description: "Ultra HD Android TV with Dolby Vision & Atmos",
      price: 34999,
      image:
        "https://images.unsplash.com/photo-1592899679769-2c40d5d1a062?w=400&fit=crop",
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      description: "RGB gaming keyboard with blue switches",
      price: 5499,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&fit=crop",
    },
    {
      id: 9,
      name: "Wireless Mouse Pro",
      description: "Ergonomic mouse with 16000 DPI sensor",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&fit=crop",
    },
    {
      id: 10,
      name: "Leather Backpack",
      description: "15-inch laptop compatible genuine leather bag",
      price: 8999,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&fit=crop",
    },
    {
      id: 11,
      name: "Gold Bracelet",
      description: "22K hallmarked gold bangle with diamond work",
      price: 24500,
      image:
        "https://images.unsplash.com/photo-1588354286767-8899e4851840?w=400&fit=crop",
    },
    {
      id: 12,
      name: "Gaming Chair",
      description: "Ergonomic chair with lumbar support & reclining",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1588880324661-3b689efa3cc9?w=400&fit=crop",
    },
    {
      id: 13,
      name: "Electric Kettle",
      description: "1.7L stainless steel kettle with auto cut-off",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=400&fit=crop",
    },
    {
      id: 14,
      name: "Bluetooth Speaker",
      description: "IPX7 waterproof speaker with 12hr playtime",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1624824335317-2f740a055afa?w=400&fit=crop",
    },
    {
      id: 15,
      name: "Yoga Mat Premium",
      description: "Anti-slip 6mm thick TPE yoga & exercise mat",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1579041259889-5cb88a781e04?w=400&fit=crop",
    },
    {
      id: 16,
      name: "Power Bank 20000mAh",
      description: "Fast charging power bank with dual USB ports",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1610945262588-931c0a9c98e8?w=400&fit=crop",
    },
    {
      id: 17,
      name: "Digital Camera",
      description: "20MP mirrorless camera with 4K video recording",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1509623484151-6d7a8e7f1b5a?w=400&fit=crop",
    },
    {
      id: 18,
      name: "Office Desk",
      description: "Solid wood study table with 2 drawers",
      price: 12999,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&fit=crop",
    },
    {
      id: 19,
      name: "Air Purifier",
      description: "HEPA filter purifier for 400 sq ft rooms",
      price: 8999,
      image:
        "https://images.unsplash.com/photo-1581559744212-5eaecf964b37?w=400&fit=crop",
    },
    {
      id: 20,
      name: "Running Shoes",
      description: "Lightweight mesh running shoes with gel cushion",
      price: 6999,
      image:
        "https://images.unsplash.com/photo-1543275849-9b1b946649d9?w=400&fit=crop",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  return (
    <MyStore.Provider
      value={{ products, setProducts, cartItems, setCartItems }}
    >
      {children}
    </MyStore.Provider>
  );
};
