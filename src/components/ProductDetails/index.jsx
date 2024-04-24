import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import NewForm from "../NewForm";
import { Button, Spinner } from "react-bootstrap";
import axiosInstance from "../../axiosConfig/axiosInstance";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const ProductDetails = () => {
  const { productID } = useParams();

  const {
    data: product,
    isError,
    isLoading,
  } = useFetch(`/products/${productID}`);

  const { counter, handleIncrement } = useCounter();

  const calculatedPrice = useMemo(() => {
    if (!product) return 0;
    const pricecInEGP = product?.price * 48.5;
    return pricecInEGP + pricecInEGP * 0.14;
  }, [product]);

  return isLoading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : isError ? (
    <span className="text-danger">Unable to fetch data</span>
  ) : (
    product && (
      <div style={{ width: "14rem" }}>
        <ProductCard product={{ ...product, price: calculatedPrice }} />

        <div className="d-flex gap-2 p-2">
          <div className="p-2">{counter}</div>
          <Button onClick={handleIncrement}>Add to cart</Button>
          {/* <Button onClick={handleIncreaseByValue}>handleIncreaseByValue</Button> */}
        </div>

        <NewForm product={product} />
      </div>
    )
  );
};

export default ProductDetails;
