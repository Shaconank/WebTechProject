const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  image3: {
    type: String,
    required: true
  },
  image4: {
    type: String,
    required: true
  },
  image5: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  weekend: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  counter: {
    type: Number,
    required: true
  },
  typeStay: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

// Create a model based on the schema
const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
