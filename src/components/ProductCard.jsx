export default function ProductCard({ name, price, image }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        width: "220px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "160px", objectFit: "contain" }}
      />

      <h3 style={{ marginBottom: "5px" }}>{name}</h3>
      <p style={{ margin: 0, fontWeight: "bold" }}>₹{price}</p>
    </div>
  );
}
