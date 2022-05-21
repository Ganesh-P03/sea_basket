import { useState, useEffect } from "react";
import React from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function updateUI(category) {
  console.log(category);
  return (
    <div className="category">
      <img src={category.img} />

      <h2>{category.name}</h2>
    </div>
  );
}

function Categories() {
  const categoriesCollectionRef = collection(db, "Categories");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      console.log(data);
      setCategories(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getCategories();
  }, []);

  return (
    <div>
      <h3 className="heading_category">CATEGORIES</h3>
      <div className="categories">{categories.map(updateUI)}</div>
    </div>
  );
}

export default Categories;
