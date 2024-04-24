import { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvider = CategoryContext.Provider;

const CategoryContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("electronics");

  return (
    <CategoryProvider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryProvider>
  );
};

export default CategoryContextProvider;
