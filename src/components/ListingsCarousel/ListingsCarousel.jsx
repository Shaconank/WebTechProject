import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ListingsCarousel.css';
import { ChevronForwardCircle, ChevronBackCircle } from 'react-ionicons';
import {Link} from 'react-router-dom'

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronBackCircle
      color={'white'}
      height={'40px'}
      width={'40px'}
      className={`customarrowright`}
      onClick={onClick}
    />
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronForwardCircle
      color={'white'}
      height={'40px'}
      width={'40px'}
      className={`customarrowleft`}
      onClick={onClick}
    />
  );
}

const ImageCarousel = (item) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
      };

  return (
    <div className='listings-container'>
    
    <div className="carousel-container">
    <Link to={`/Listing/${item.counter}`} style={{textDecoration : 'none', color: 'inherit'}}>
      <Slider {...settings} > 
        <img src={item.image1} className='CarouselImage'/>
        <img src={item.image2} className='CarouselImage'/>
        <img src={item.image3} className='CarouselImage'/>
        <img src={item.image4} className='CarouselImage'/>
        <img src={item.image5} className='CarouselImage'/>  
      </Slider>
      </Link>
    </div>
    <Link to={`/Listing/${item.counter}`} style={{textDecoration : 'none', color: 'inherit'}}>
    <div className='ListingsText'>
      <div className='localityText'>{item.state}</div>
      <div className='distanceText'>{item.distance} kilometers away</div>
      <div className='datesText'>{item.weekend}</div>
      <div className='priceText'>
        <div className='priceNumber'>₹{item.price} </div> 
        <div className='nightText'>night</div>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default ImageCarousel;


