import React, { useEffect, useState } from "react";
import './Home.css';
import Header from "../components/Header/Header";
import MultiItemCarousel from "../components/Carousel/Carousel";
import FilterItem from "../components/FilterItem/FilterItem";

export default function Home() {
  const [marginTop, setMarginTop] = useState("2%");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setMarginTop("1%");
    } else {
      setMarginTop("2%");
    }
  };

  const filterControlStyle = {
    marginTop,
    transition: "margin-top 0.3s ease"
  };

  return (
    <div className="containerHome">
      <div className="headerWrapper">
        <Header />
        <div className="filterControl" style={filterControlStyle}>
          <MultiItemCarousel />
        </div>
      </div>
    </div>
  );
}
