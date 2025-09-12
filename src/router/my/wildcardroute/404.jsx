export default function NotFound() {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "50px" 
    }}>
      <h1 style={{ fontSize: "3rem", color: "red" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to Home
      </a>
    </div>
  );
}
