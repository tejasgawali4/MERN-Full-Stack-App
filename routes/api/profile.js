const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../modules/Profile');
const User = require('../../modules/User');

//@route GET api/profile/me
//@desc Get Current User Profile
//@access Public
router.get('/me', auth, async (req,res) => {

    try{
        const profile = await Profile.findOne({ user : req.user.id}).populate('user',
        ['name','avatar']);

        if(!profile){
            return res.status(400).json({ msg : 'There is no profile for this user'});
        }

        res.json(profile);

    }catch(err){
        res.status(500).send('Server Error');
    }
});


//@route POST api/profile
//@desc Create or Update user profile
//@access Public
router.post('/', 
auth,[
    check('status','Status is Required').not().isEmpty(),
    check('skills','Skills is Required').not().isEmpty()
], async (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }

    const {
        company,
        website,
        location,
        bio,
        status,
        githubusername,
        skills,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin
    } = req.body;

    //Build Profile Object
    const profileFields = {};
    profileFields.user = req.user.id;
    if(company) profileFields.company = company;
    if(website) profileFields.website = website;
    if(location) profileFields.location = location;
    if(bio) profileFields.bio = bio;
    if(status) profileFields.status = status;
    if(githubusername) profileFields.githubusername = githubusername;
    if(skills) {
        profileFields.skills = skills.split(',')
        .map(skill => skill.trim());
    }

    //Build Social Object
    profileFields.social = {}
    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(facebook) profileFields.social.facebook = facebook;
    if(linkedin) profileFields.social.linkedin = linkedin;
    if(instagram) profileFields.social.instagram = instagram;
    
    try {
        let profile = await Profile.findOne({ user : req.user.id })
    
        if(profile){
            //Update
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id},
                { $set : profileFields},
                { new : true }
                );

            return res.json(profile);
        }

        //Create One If Not Found
        profile =  new Profile(profileFields);

        await profile.save();
        
        return req.json(profile);

    }catch (err){
        console.log(err.message);
        res.status(500).send('Server Error');1
    }

});

module.exports = router;