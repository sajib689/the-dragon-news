import React, { useEffect, useState } from "react";
import LeftData from "../LeftData/LeftData";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
        <div>
        <h4>All Category</h4>
        <h5>National News</h5>
        </div>
     <div className="ps-4 ">
     {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`} className="text-decoration-none">{category.name}</Link>
        </p>
      ))}
     </div>
    </div>
  );
};

export default LeftNav;
