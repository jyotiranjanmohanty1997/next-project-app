import Image from "next/image";
import "../myicon/css/all.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
    </>
  );
}
