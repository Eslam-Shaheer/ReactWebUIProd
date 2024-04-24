import React, { useContext, useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import axiosInstance from "../../axiosConfig/axiosInstance";
import { Spinner } from "react-bootstrap";
import { CategoryContext } from "../../contexts/CategoryContext";
const websiteName = "Web & Ui Track";
const categories = [
  { id: "1", label: "Pants" },
  { id: "2", label: "Shirt" },
  { id: "3", label: "T-Shirt" },
  { id: "4", label: "Short" },
];

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  // const [userName, setUserName] = useState("Eslam");
  // const [showLogo, setShowLogo] = useState(true);

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const changeNameTimout = setTimeout(() => {
    //   setUserName("Ahmed");
    // }, 3000);
    // const changeNameTimeout = setInterval(() => {
    //   setUserName(Date.now());
    // }, 3000);

    const getData = async () => {
      setIsLoading(true);
      const response = await axiosInstance.get(`/products/categories`);
      setCategories(response.data);
      setIsLoading(false);
    };
    getData();

    return () => {
      //   clearTimeout(changeNameTimout);
      //   clearInterval(changeNameTimeout);
    };
  }, []);

  // useEffect(() => {
  //   if (userName == "Ahmed") setShowLogo(false);
  // }, [userName]);

  // const handleClick = () => {
  //   setUserName("Mohamed");
  // };

  // const toggleLogo = () => {
  //   setShowLogo((prev) => {
  //     return prev ? false : true;
  //   });
  // };

  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="flex-fill bg-light"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {categories.map((category) => (
            <li
              onClick={() => setSelectedCategory(category)}
              key={category}
              className={`${styles.listItem} ${
                selectedCategory == category ? styles.active : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
      {/* <div className={`${styles.container}`}>
        <h2>{websiteName}</h2>
        <span>Name: {userName}</span>
        <button className="btn btn-secondary" onClick={handleClick}>
          Change name
        </button>
        <FaFacebookSquare size={50} />

        {showLogo && (
          <img
            className={styles.img}
            src="https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_200_200/0/1631351788797?e=2147483647&v=beta&t=iXbSgKU_owuB_zDsEqV4D-MHiJivwOMoZ45Wr8HdDc8"
            alt="ITI"
          />
        )}

        <button className="btn btn-secondary" onClick={toggleLogo}>
          Toggle logo
        </button>

        <ul className={styles.list}>
          {categories.map((category, index) => (
            <li key={category.id}>
              <span>{index + 1}</span> - <span>{category.label}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;
