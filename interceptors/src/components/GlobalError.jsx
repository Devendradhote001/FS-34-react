import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeError } from "../features/errorSlice";

const GlobalError = () => {
  let dispatch = useDispatch();

  let error = useSelector((state) => state.error.error);
  console.log("get it ->", error);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(removeError());
    }
  }, [error]);

  return null;
};

export default GlobalError;
