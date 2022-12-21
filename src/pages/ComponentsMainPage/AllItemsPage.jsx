import Category from "../../components/Category/Category";
import Card from "../../components/Card/Card";
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
function AllItemsPage() {
  const [category, setCategory] = useOutletContext();
  const [data, setData] = useState([]);
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
    if (e.target.id === "all") {
      setCategory("");
      setCataTitle("Tất Cả Sản Phẩm");
    } else {
      setCategory(e.target.id);
      if (e.target.id === "bimbim") {
        setCataTitle("Bim Bim");
      } else if (e.target.id === "drink") {
        setCataTitle("Đồ Uống");
      } else if (e.target.id === "snack") {
        setCataTitle("Đồ Ăn Nhẹ");
      } else {
        setCataTitle("Đồ Ăn Khác");
      }
    }
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
