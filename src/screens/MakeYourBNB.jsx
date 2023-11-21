// MakeYourBNB.jsx

import React, { useState } from 'react';
import Header from '../components/Header/Header';
import './MakeYourBNB.css'; // Import your CSS file for styling

const MakeYourBNB = () => {
  const [ownerName, setOwnerName] = useState('');
  const [listingPrice, setListingPrice] = useState();
  const [listingState, setListingState] = useState('');
  const [listingTypeStay, setListingTypeStay] = useState('');
  const [listingImage1, setListingImage1] = useState('');
  const [listingImage2, setListingImage2] = useState('');
  const [listingImage3, setListingImage3] = useState('');
  const [listingImage4, setListingImage4] = useState('');
  const [listingImage5, setListingImage5] = useState('');
  const [listingWeekend,setListingWeekend] = useState('11-12 Nov');
  const [listingDistance,setListingDistance] = useState('200');


  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    console.log('Submitted:', { ownerName, listingPrice, listingTypeStay, listingState, listingImage1, listingImage2, listingImage3, listingImage4, listingImage5,listingWeekend,listingDistance});
    const data = {
      ownerName,
      listingPrice,
      listingTypeStay,
      listingState,
      listingImage1,
      listingImage2,
      listingImage3,
      listingImage4,
      listingImage5,
      listingWeekend,
      listingDistance,
    };
   console.log(data)
    try {
      const response = await fetch('/api/setCardData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Property listed successfully');
      } else {
        console.error(`Failed to list property ${response.ok}`);
      }
    } catch (error) {
      console.error('Error listing property:', error);
    }
    
  };

  return (
    <div className="MakeYourBNBContainer">
      <Header />
      <div className="MakeYourBNBBody">
        <h1>List Your Property on BNB</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ownerName">Owner Name:</label>
            <input
              type="text"
              id="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingPrice">Listing Price:</label>
            <input
              type="number"
              id="listingPrice"
              value={listingPrice}
              onChange={(e) => setListingPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingTypeStay">Listing Type:</label>
            <input
              type="text"
              id="listingTypeStay"
              value={listingTypeStay}
              onChange={(e) => setListingTypeStay(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingState">State:</label>
            <input
              type="text"
              id="listingState"
              value={listingState}
              onChange={(e) => setListingState(e.target.value)}
              onBlur={(e) => setListingState(listingState+",India")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingImage1">Image1(URL):</label>
            <input
              type="text"
              id="listingImage1"
              value={listingImage1}
              onChange={(e) => setListingImage1(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingImage2">Image2(URL):</label>
            <input
              type="text"
              id="listingImage2"
              value={listingImage2}
              onChange={(e) => setListingImage2(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingImage3">Image3(URL):</label>
            <input
              type="text"
              id="listingImage3"
              value={listingImage3}
              onChange={(e) => setListingImage3(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingImage4">Image4(URL):</label>
            <input
              type="text"
              id="listingImage4"
              value={listingImage4}
              onChange={(e) => setListingImage4(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="listingImage5">Image5(URL):</label>
            <input
              type="text"
              id="listingImage5"
              value={listingImage5}
              onChange={(e) => setListingImage5(e.target.value)}
              required
            />
          </div>
          <button type="submit">List Property</button>
        </form>
      </div>
    </div>
  );
};

export default MakeYourBNB;
