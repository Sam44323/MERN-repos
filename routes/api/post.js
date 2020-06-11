const express = require('express');

const router = express.Router();

//@route GET api/post
//@desc test route
//@access Public

router.get('/post', (req, res) => res.send('Post Route'));

module.exports = router;
