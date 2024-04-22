const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

export default function StarRating() {
  return (
    <div style={containerStyle}>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>5{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}
