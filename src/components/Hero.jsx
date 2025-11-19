export default function Hero({ product }) {
  return (
    <section
      style={{
        padding: "50px",
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "50px",
      }}
    >
      {/* Left Side Text */}
      <div>
        <h1 style={{ fontSize: "40px", margin: "0" }}>{product.title}</h1>
        <p>{product.tagline}</p>

        <button
          style={{
            background: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>

      {/* Right Side Image */}
      <img
        src={product.heroImage}
        alt={product.title}
        style={{ width: "300px" }}
      />
    </section>
  );
}
