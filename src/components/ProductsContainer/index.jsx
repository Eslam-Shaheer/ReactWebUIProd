import React from "react";
import { Spinner } from "react-bootstrap";
import ProductCard from "../ProductCard";
import styles from "./products.module.css";
const ProductsContainer = ({ isLoading, products = [] }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
