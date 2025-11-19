export default function ProductCard({ name, price, image }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "200px",
        borderRadius: "8px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{name}</h3>
      <p>₹{price}</p>

      <button
        style={{
          background: "red",
          border: "none",
          color: "white",
          padding: "10px",
          width: "100%",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
