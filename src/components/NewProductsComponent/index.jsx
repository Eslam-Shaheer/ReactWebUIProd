import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosInstance";
import ProductsContainer from "../ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, setProducts } from "../../store/slices/productsSlice";

const NewProductsComponent = () => {
  // const data = useLoaderData();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  //   const getData = async () => {
  //     const response = await fetch(`https://fakestoreapi.com/products`);
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  const getData = async () => {
    dispatch(getAllProducts());

    // const response = await axiosInstance.get(`/products`);
    // dispatch(setProducts(response.data));

    // setIsLoading(true);
    // setIsLoading(false);
    // setProducts(response.data);
    // try {
    //   setIsLoading(true);
    //   const response = await axiosInstance.get(`/products`);
    //   setProducts(response.data);
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    if (!products.value.length) {
      getData();
    }
  }, []);
  return products.isError ? (
    <span className="text-danger">{products.isError}</span>
  ) : (
    <ProductsContainer
      products={products.value}
      isLoading={products.isLoading}
    />
  );
};

export default NewProductsComponent;
