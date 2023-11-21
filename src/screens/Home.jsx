import React, { useEffect, useState } from "react";
import './Home.css';
import Header from "../components/Header/Header";
import MultiItemCarousel from "../components/Carousel/Carousel";
import { OptionsOutline } from "react-ionicons";
import Listings from "../components/Listings/Listings";

export default function Home() {
  const [marginTop, setMarginTop] = useState("2%");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    fetchData(); // Fetch data when the component mounts

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/CardData'); 
      const result = await response.json();
      
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setMarginTop("1%");
    } else {
      setMarginTop("2%");
    }
  };

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
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
          <div className="filter">
            <OptionsOutline height={'25px'} width={'25px'} className="filterIcon" />
            <h className="filtersText">Filters</h>
          </div>
          <div className="Taxes">
            <h className="filtersText">Display total before taxes</h>
            <div className={`switch ${isSwitchOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
              <div className={`slider ${isSwitchOn ? 'on' : 'off'}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ListingDiv">
        <Listings data={data} />
      </div>
    </div>
  );
}
