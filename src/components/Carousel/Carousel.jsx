import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { ChevronForwardCircleOutline, ChevronBackCircleOutline } from 'react-ionicons';

import FilterItem from '../FilterItem/FilterItem';
import data from '../../ScrollerData.json'

console.log(data)

class MultiItemCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
      totalSlides: 0,
    };
  }

  handleBeforeChange = (oldIndex, newIndex) => {
    this.setState({ currentSlideIndex: newIndex });
  };

  render() {
    const { currentSlideIndex, totalSlides } = this.state;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 4,
      prevArrow: currentSlideIndex === 0 ? null : <CustomPrevArrow />,
      nextArrow:
        currentSlideIndex === totalSlides - 10 ? null : <CustomNextArrow />,
      beforeChange: this.handleBeforeChange,
    };

    return (
      <div className="multi-item-carousel">
        <Slider {...settings}>
          {data.map((item,index) =>
            <div key = {index}>
              <FilterItem source ={item.source} title = {item.title} />
            </div>
          )} 
        </Slider>
      </div>
    );
  }

  componentDidMount() {
    const totalSlides = this.calculateTotalSlides();
    this.setState({ totalSlides });
  }

  calculateTotalSlides() {
    
    const carousel = document.querySelector('.multi-item-carousel');
    if (carousel) {
      const slideItems = carousel.querySelectorAll('.slick-slide');
      return slideItems.length;
    }
    return 0;
  }
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    
    <ChevronBackCircleOutline color={'black'} height={'20px'} width={'20px'} className="custom-arrow-right" onClick={onClick} style={{position: 'absolute'}}/>
    
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    
    <ChevronForwardCircleOutline color={'black'} height={'20px'} width={'20px'} className="custom-arrow-left" onClick={onClick} style={{position: 'absolute'}}/>

  );
}

export default MultiItemCarousel;
