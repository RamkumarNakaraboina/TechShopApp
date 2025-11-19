import { useParams } from "react-router-dom";
import productsData from "../data/productsData";

export default function ProductDetails() {
  const { id } = useParams(); // get URL id
  const product = productsData.find(
    // find product by id
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>{product.info}</p>
      <p>Price: ₹{product.finalPrice}</p>
    </div>
  );
}
