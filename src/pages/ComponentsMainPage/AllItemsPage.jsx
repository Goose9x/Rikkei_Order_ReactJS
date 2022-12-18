import Category from "../../components/Category/Category";
import Card from "../../components/Card/Card";

function AllItemsPage() {
  return (
    <>
      <Category />
      <div className='category-name'>
        <h1>Tất cả sản phẩm</h1>
      </div>
      <div className='row row-cols-1 row-cols-md-5 g-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default AllItemsPage;
