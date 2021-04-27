const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName:{
        type: String,
        required:[true, "Pet Name is required"],
        minLenght:[2, "Pet name should be at least 3 characters long"],
    },
    typeOfPet:{
        type: String,
        required:[true, "Pet Type is required"],
        minLenght:[3, "Pet type should be at least 3 characters long"],
    },
    description:{
        type: String,
        required:[true, "Please describe your pet"],
        minLenght:[3, "Pet description should be at least 3 characters long"],
    },
    skillOne:{
        type: String,
    },
    skillTwo:{
        type: String,
    },   
    skillsThree:{
        type: String,
    }



}, {timestamps: true})

module.exports = mongoose.model("Pet", PetSchema);