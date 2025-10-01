export default function Loading() {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div
        style={{
          height: 320,
          background: "#0c111b",
          borderRadius: 12,
          border: "1px solid #1b2332",
        }}
      />
      <div className="skeleton-line" />
      <div className="skeleton-line short" />
    </div>
  );
}
