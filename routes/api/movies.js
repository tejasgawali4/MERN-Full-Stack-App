const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Movies = require('../../modules/Movies');

//@route GET api/movies
//@desc GetAllMovies
//@access Public
router.get('/',
async (req,res) => {
    try {

        const movies = await Movies.find();
        res.status(200).json(movies);

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
    res.status(200).send('Working Fine');
});


//@route POST api/movies
//@desc Create Movies
//@access Public
router.post('/', 
[check('name','Name is not valid').not().isEmpty(),
check('url','URL is not valid').not().isEmpty()],
async (req,res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }

    const { name, url } = req.body;

    try {
        
        let movies = await Movies.findOne({ name : name });
        
        if(movies){
            return res.status(400).json({ errors : [{ msg : 'Movie alredy exists..'}]});
        }

        movies = new Movies({
            name,
            url
        });

        await movies.save();

        const payload = {
            movies: {
              id: movies.id
            }
        };

        res.json({ payload });

    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }

});

//@route DELETE api/movies
//@desc DELETE Movie By ID
//@access Public
router.delete('/:id',
async (req,res) => {
    try {
        
        await Movies.findByIdAndRemove({ _id: req.params.id});

        res.status(200).send('Movie Deleted');
        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;