import React, { useContext } from "react";
import ProductsContainer from "../ProductsContainer";
import { CategoryContext } from "../../contexts/CategoryContext";
import useFetch from "../../hooks/useFetch";
import { useQuery } from "react-query";
import axiosInstance from "../../axiosConfig/axiosInstance";

const CategoryProducts = () => {
  const { selectedCategory } = useContext(CategoryContext);

  // const { data, isLoading } = useFetch(
  //   `/products/category/${selectedCategory}`,
  //   [selectedCategory]
  // );

  const { data: response, isLoading } = useQuery(
    ["CATEGORIES", selectedCategory],
    () => axiosInstance.get(`/products/category/${selectedCategory}`)
  );

  return <ProductsContainer products={response?.data} isLoading={isLoading} />;
};

export default CategoryProducts;
