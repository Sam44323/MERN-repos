const express = require('express');

const router = express.Router();

//@route GET api/profil
//@desc test route
//@access Public

router.get('/profile', (req, res) => res.send('Profile Route'));

module.exports = router;
