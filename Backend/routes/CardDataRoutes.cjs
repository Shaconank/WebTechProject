const express = require('express');
const router = express.Router();
const {getCardData,setCardData,deleteCardData,updateCardData,getSingleCardData} = require('../controller/ListingCards.cjs')

router.get('/', getCardData)

router.get('/:id', getSingleCardData)


router.post('/', setCardData)


router.put('/:id',updateCardData)



router.delete('/:id', deleteCardData)


module.exports = router;
