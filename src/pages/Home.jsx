import Hero from "../components/Hero";
import servicesData from "../data/servicesData";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {
  const heroProducts = productsData.filter(
    (item) => item.tag === "hero-product"
  );
  const featuredProducts = productsData.filter(
    (item) => item.tag === "featured-product"
  );

  return (
    <div>
      {/* Hero Section */}
      {heroProducts.map((product) => (
        <Hero key={product.id} product={product} />
      ))}

      {/* Services Row */}
      <section style={{ padding: "20px", display: "flex", gap: "20px" }}>
        {servicesData.map((service) => (
          <div
            key={service.id}
            style={{
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "30px" }}>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.info}</p>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section style={{ padding: "20px" }}>
        <h2>Featured Products</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {featuredProducts.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ProductCard
                name={item.title}
                price={item.finalPrice}
                image={item.images[0]}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
