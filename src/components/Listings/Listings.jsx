import React from 'react'
import data from '../../../Img_URLs.json'
import ImageCarousel from '../ListingsCarousel/ListingsCarousel'
/* import {Link} from 'react-router-dom' */
export default function Listings() {

  return (
    <div style = {{display: "flex", flexWrap: 'wrap',height:'80vh',}}>
        {
            data.map((item,index) => (
              
              <ImageCarousel image1 = {item.image1} image2 = {item.image2} image3 = {item.image3} image4 = {item.image4} image5 = {item.image5} state = {item.state} distance = {item.distance} weekend = {item.weekend} price = {item.price} counter = {item.counter}/>
              
            ))
        }
    </div>
  )
}
