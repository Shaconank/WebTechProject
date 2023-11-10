import React from 'react'
import Header from "../components/Header/Header";
import { useParams } from 'react-router-dom';
import data from '../../../Img_URLs.json'
console.log("Data:"+ data);
export default function HousePage() {
  const { listingid } = useParams();
  console.log("counter:" + listingid)
  const selectedItem = data.find(item => item.counter == listingid);
  console.log("this is printing:"+selectedItem);
  return (
    <div className='ListingPageContainer'>
        <Header/>
        <img src={selectedItem.image1}/>
        <img src={selectedItem.image2}/>
        <img src={selectedItem.image3}/>
        <img src={selectedItem.image4}/>
        <img src={selectedItem.image5}/>
    </div>
  )
}
