const express = require('express');
const router = express.Router();
const ctrlLocations =
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
/*to get review*/
router.get('/location/review/new',ctrlLocations.addReview)
router.get('/about', ctrlOthers.about);
module.exports = router;