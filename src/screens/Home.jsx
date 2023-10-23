// React component
import React from "react";
import './Home.css';
import Header from "../components/Header/Header";
import MultiItemCarousel from "../components/Carousel/Carousel";
import FilterItem from "../components/FilterItem/FilterItem";
export default function Home() {
  return (
    <div className="containerHome">
      <Header/>
      <div className="filterControl">
        <MultiItemCarousel />
      </div>
      
      
    </div>
  );
}
