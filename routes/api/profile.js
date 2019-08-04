const express = require('express');
const router = express.Router();

//@route GET api/profil
//@desc Test route
//@access Public
router.get('/',(req,res) => res.send('Profil route'));

module.exports = router;