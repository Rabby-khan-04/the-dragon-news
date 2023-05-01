import { useEffect, useState } from "react";
import CategoryLlink from "./CategoryLlink";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="sticky top-8">
      <h2 className="mb-5 text-primary text-xl font-semibold">All Category</h2>
      {categories.map((category) => (
        <CategoryLlink key={category.id} category={category} />
      ))}
    </div>
  );
};

export default LeftNav;
