export default function MainArea({ children }) {
  const style = { backgroundColor: "#FCF5E5" };

  return (
    <main style={style} className="main-area">
      {children}
    </main>
  );
}
