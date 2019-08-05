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


//@route GET api/profile
//@desc Get All Profile
//@access Public
router.get('/', async (req,res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name','avatar']);
        res.json(profiles);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

//@route GET api/profile/user/:user_id
//@desc Get Profile by ID
//@access Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user : req.params.user_id })
        .populate('user',['name','avatar']);

        if(!profile) return res.status(400).json({ msg: 'Profile Not Found'});
        
        res.json(profile);

    } catch (err) {
        console.log(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({ msg: 'Profile Not Found'});
        }
        res.status(500).send('Server Error');
    }
});

//@route DELETE api/profile/user/:user_id
//@desc Delete Profile and posts
//@access Private
router.delete('/user/:user_id', auth , async (req,res) => {
    try {
        //TODO - remove posts

        //Remove Profile By ID
        await Profile.findByIdAndRemove({ user: req.user.id});
        //Remove User By ID
        await User.findByIdAndRemove({ _id: req.user.id});

        res.json({msg: 'User Removed Successfully'});
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});


//@route DELETE api/profile/experience
//@desc Add Profile Experience
//@access Private
router.put('/experience',auth,
    [
        check('title','Title is required').not().isEmpty(),
        check('company','Company is Required').not().isEmpty(),
        check('from','From Date is Required').not().isEmpty()
    ],
    async (req,res) => {

        const error = validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({ errors : errors.array});
        }

        const {
            title,
            company,
            location,
            from,
            to,
            current,
            description
          } = req.body;
      
          const newExp = {
            title,
            company,
            location,
            from,
            to,
            current,
            description
          };
      
          try {
            const profile = await Profile.findOne({ user: req.user.id });
      
            profile.experience.unshift(newExp);
      
            await profile.save();
      
            res.json(profile);
          } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
          }
});


module.exports = router;