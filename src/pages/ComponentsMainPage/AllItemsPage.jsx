import Category from "../../components/Category/Category";
import Card from "../../components/Card/Card";
import React, { useState, useEffect } from "react";

function AllItemsPage() {
  const [data, setData] = useState([]);
  const [category, setCategoty] = useState([]);
  const [cataTitle, setCataTitle] = useState("Tất cả sản phẩm");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://127.0.0.1:3000/product?category=${category}`
      );
      const data = await res.json();
      setData(data.data);
    };
    fetchData().catch(console.error);
  }, [category]);
  const handleChooseCatagory = (e) => {
    setCategoty(e.target.id);
  };
  if (data.length === 0) {
    return <div>...</div>;
  }
  return (
    <>
      <Category handleChooseCatagory={handleChooseCatagory} />
      <div className='category-name'>
        <h1>{cataTitle}</h1>
      </div>
      <div className='row row-cols-1 row-cols-md-5 g-5'>
        {data.map((e, i) => (
          <Card key={i} cardData={e} />
        ))}
      </div>
    </>
  );
}

export default AllItemsPage;
