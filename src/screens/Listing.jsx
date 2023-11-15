import React from 'react'
import Header from "../components/Header/Header";
import { useParams } from 'react-router-dom';
import data from '../../../Img_URLs.json'
import "./Listing.css"
import { Star, PersonCircleOutline, MedalOutline, ReloadOutline } from 'react-ionicons';
import {BsDoorOpen,BsWater } from 'react-icons/bs'
console.log("Data:"+ data);
import { useState, useEffect } from 'react';



export default function HousePage() {
  
  
  const { listingid } = useParams();
  const selectedItem = data.find(item => item.counter == listingid);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalPayment, setTotalPayment] = useState(0);
  
  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1) {
      setNumberOfGuests(inputValue);
    }
  };
  const handleCheckInDateChange = (e) => {
    const inputValue = e.target.value;
  
    // Parse the input date string to compare
    const inputDate = new Date(inputValue);
    const checkOutDateObj = new Date(checkOutDate);
  
    // Check if the input date is valid and before the check-out date
    if (!isNaN(inputDate) && inputDate < checkOutDateObj) {
      setCheckInDate(inputValue);
    }
  };
  const handleCheckOutDateChange = (e) => {
    const inputValue = e.target.value;
  
    // Parse the input date string to compare
    const inputDate = new Date(inputValue);
    const checkOutDateObj = new Date(checkInDate);
  
    // Check if the input date is valid and before the check-out date
    if (!isNaN(inputDate) && inputDate > checkInDateObj) {
      setCheckInDate(inputValue);
    }
  };
  
  
  useEffect(() => {
    
    const today = new Date();
    const nearestSaturday = new Date(today);
    nearestSaturday.setDate(today.getDate() + (6 - today.getDay()));
    const followingMonday = new Date(today);
    followingMonday.setDate(today.getDate() + (8 - today.getDay()));
    const formattedNearestSaturday = nearestSaturday.toISOString().split('T')[0];
    const formattedFollowingMonday = followingMonday.toISOString().split('T')[0];
    setCheckInDate(formattedNearestSaturday);
    setCheckOutDate(formattedFollowingMonday);
  }, []);
  
  useEffect(() => {
    const checkInDateObj = new Date(checkInDate);
    const checkOutDateObj = new Date(checkOutDate);
    const timeDiff = checkOutDateObj - checkInDateObj;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

    const totalPrice = selectedItem.price * daysDiff * numberOfGuests;
    setTotalPayment(totalPrice);
  }, [checkInDate, checkOutDate, numberOfGuests, selectedItem.price]);

  return (
    <div className='ListingPageContainer'>
        <Header/>
        <div className="bodyCode">
          <div className="houseName">
            {selectedItem.name}
          </div>
        <div className="imageContainer">
          <img src={selectedItem.image1} className='image1'/>
          <div className="smallPics">
            <div className="imageRow1">
              <img src={selectedItem.image2} className='image2'/>
              <img src={selectedItem.image3} className='image3'/>
            </div>
            <div className="imageRow2">
              <img src={selectedItem.image4} className='image4'/>
              <img src={selectedItem.image5} className='image5'/>
            </div>
          </div>
        </div>
        <div className="specification">
          <div className="specText">
            <div className="nameRating">
              <div className="ListingType">{selectedItem.typeStay} in {selectedItem.state}</div>
              <div className="amenityList">16+ guests4 bedrooms8 beds3.5 bathrooms</div>
              <div className="listingRating"><Star height={'20px'} width={'25px'} style = {{position: 'relative', top: '3px', marginRight: '7px'}}/>4.85 115 reviews</div>
            </div>
            <div className="listingHost">
              <PersonCircleOutline height={'50px'} width={'50px'}/>
              <div className="listingHostText">
              <div className="hostName">Host Name Holder</div>
              <div className="superHostTimer">Superhost2 years hosting</div>
              </div>
            </div>
            <div className="coolAmenities">
            <div className="SelfCheckIn">
              <BsDoorOpen size={'30px'} style = {{position: 'relative', top: '20%'}}/>
              <div className="AmenityText">
              <div className="hostName">Self check-in</div>
              <div className="superHostTimer">You can check in with the building staff.</div>
              </div>
            </div>
            <div className="SuperHost">
              <MedalOutline height={'30px'} width={'30px'} style = {{position: 'relative', top: '20%'}}/>
              <div className="AmenityText">
              <div className="hostName">Host Name is a Super Host</div>
              <div className="superHostTimer">Superhosts are experienced, highly rated Hosts.</div>
              </div>
            </div>
            <div className="DiveRightIn">
              <BsWater size={'30px'} style = {{position: 'relative', top: '20%'}}/>
              <div className="AmenityText">
              <div className="hostName">Dive right in</div>
              <div className="superHostTimer">This is one of the few places in the area with a pool.</div>
              </div>
            </div>
            </div>
            <div className="listingDescription">
            Welcome to our cozy Airbnb hideaway in the heart of {selectedItem.state}. This 5 bedroom gem is designed for comfort and style. Unwind in the inviting living space, enjoy home-cooked meals in the fully equipped kitchen, and relax in the sleek bedrooms. Our location is perfect for exploring nearby attractions, and countless landmarks are just a short walk away. With modern amenities like Wi-Fi, air conditioning, etc, we aim to make your stay effortless and memorable. Book now for a delightful stay in {selectedItem.state}!
            </div>
          </div>
          <div className="paymentContainer">
            <div className="paymentBox">
              <div className="paymentPrice">
                <div className="priceNumberer">₹{selectedItem.price}</div>
                <div className="priceNight">night/person</div>
              </div>
              <div className="paymentDates">
                <div className="checkinDates">
                <div className="checkinDate">
                  <div className='inText'><p>Check-In</p></div>
                  <input
                    type="date"
                    id="checkInDateVal"
                    name="checkInDateVal"
                    value={checkInDate}
                    onChange={handleCheckInDateChange}
                  />
                </div>
                <div className="checkoutDate">
                  <div className='outText'><p>Check-Out</p></div>
                  <input
                    type="date"
                    id="checkOutDateVal"
                    name="checkOutDateVal"
                    value={checkOutDate}
                    onChange={handleCheckOutDateChange}
                  />
                </div>
                </div>
                <div className="guestNumber">
                  <div className="guestText">Guests</div>
                  <input
                  type="number"
                  id="guestInput"
                  className="guestInput"
                  name="guestInput"
                  value={numberOfGuests}
                  onChange={handleInputChange}
                  />
                  
                </div>
              </div>
              <div className="reservationButton">
                <div className="reservation"> Reserve</div>
              </div>
              <div className="totalPayment">
                  
                  <div className="totalTotal">Total</div>
                  <div className="cashAmount">₹{totalPayment.toFixed(0)}</div>
                 
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
