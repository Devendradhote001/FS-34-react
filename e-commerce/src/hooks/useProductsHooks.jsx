import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../apis/productApis";
import { useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    staleTime: 10000,
  });
};

let products = useGetAllProducts();

export let useAddToCart = (id) => {
  let { cartItems } = useSelector((state) => state.cart);

  let clickedCard = products.find((elem) => elem.id === id);
  let isInCart = cartItems.find((elem) => elem.id === id);
  if (isInCart) {
    alert("product already in cart");
    return;
  }
  if (clickedCard) {
    dispatch(addToCart(clickedCard));
    alert("product added to cart");
  }
};
