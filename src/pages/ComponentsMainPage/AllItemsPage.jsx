import Category from "../../components/Category/Category";
import Card from "../../components/Card/Card";
import React, { useState, useEffect } from "react";

function AllItemsPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/product");
      const data = await res.json();
      setData(data.data);
    };
    fetchData().catch(console.error);
  }, []);
  if (data.length === 0) {
    return <div>LOADING</div>;
  }
  return (
    <>
      <Category />
      <div className='category-name'>
        <h1>Tất cả sản phẩm</h1>
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
