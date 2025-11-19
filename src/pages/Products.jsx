import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section style={{ padding: "20px" }}>
      <h2>All Products</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {productsData.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ProductCard
              name={product.title}
              price={product.finalPrice}
              image={product.images[0]}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
