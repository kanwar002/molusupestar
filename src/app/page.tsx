import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="moludiv"
    >
      <h1 style={{ fontWeight: "bold", fontSize: "3rem" }} className="title">
        You are Gay
      </h1>
    </div>
  );
}
