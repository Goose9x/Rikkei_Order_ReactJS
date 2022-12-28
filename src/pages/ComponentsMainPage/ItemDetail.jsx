import { useEffect, useState } from "react";
import ItemInformation from "../../components/ItemInformation/ItemInformation";
function ItemDetail() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let id = window.location.href.replace("http://localhost:8000/item/", "");
    const fetchDataSearch = async () => {
      const res = await fetch(`http://localhost:3000/product/${id}`);
      const data = await res.json();
      setData(data.data);
    };
    fetchDataSearch().catch(console.error);
  }, []);
  if (data.length === 0) {
    return <div>...</div>;
  }
  return (
    <>
      <ItemInformation data={data[0]} />
    </>
  );
}

export default ItemDetail;
