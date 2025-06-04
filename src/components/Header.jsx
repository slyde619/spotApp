export default function Header() {
  const style = { 
    textAlign: "center",
    padding: '10px 80px',
   };

  const imageStyle = { width: "94px", height: "26px" };

  return (
    <header style={style}>
      <img src="/Logo.png" style={imageStyle} />
    </header>
  );
}
