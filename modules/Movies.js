const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    }

});

module.exports = Movies = mongoose.model('movies',MovieSchema);