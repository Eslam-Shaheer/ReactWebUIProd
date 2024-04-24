import React, { useContext } from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
const ProductCard = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link to={`/product/${product.id}`}>
      <Card
        className={`${styles.card} ${theme == "dark" ? "bg-secondary" : ""}`}
        key={product.id}
      >
        <div
          className="d-flex justify-content-center"
          // onClick={() => navigate(`/product/${product.id}`)}
        >
          <Card.Img variant="top" src={product.image} />
        </div>
        <Card.Body>
          <Card.Title className={styles.desc}>{product.title}</Card.Title>
          <Card.Text className={styles.desc}>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
