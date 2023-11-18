const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const Listing = require('../models/cardModel.cjs');

const getCardData = asyncHandler(async (req, res) => {
  const Cards = await Listing.find({});
  res.status(200).json(Cards);
});

 
const getSingleCardData = asyncHandler(async (req, res) => {
  const cardCounter = req.params.id; // Extracting the card counter from the URL parameter
  try {
    const card = await Listing.findOne({ counter: cardCounter });

    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }

    res.status(200).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const setCardData = asyncHandler(async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ error: 'Please add a text field' });
      return;
    }

    const cardData = {
      _id: req.body.text,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      image4: req.body.image4,
      image5: req.body.image5,
      state: req.body.state,
      distance: req.body.distance,
      weekend: req.body.weekend,
      price: req.body.price,
      counter: req.body.counter,
      typeStay: req.body.typeStay,
      name: req.body.name,
    };

    const newListing = await Listing.create(cardData);

    res.status(201).json({ message: 'Data set successfully', data: newListing });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const updateCardData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Data ${req.params.id}` });
});

const deleteCardData = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Data ${req.params.id}` });
});



module.exports ={
  getCardData,
  setCardData,
  updateCardData,
  deleteCardData,
  getSingleCardData
};
