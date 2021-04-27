const Pet = require('../models/pet.models');

module.exports = {
    getAll: (req, res) => {
        Pet.find({})
            .sort({typeOfPet:1})
            .then((allPets) => {
                console.log('inside all pets');
                console.log(allPets);
                res.json(allPets);
            })
            .catch((err)=>{
                console.log("error found in getAll");
                res.status(400).json(err);
            })
    },

    create: (req,res) =>{
        console.log(req.body);
        Pet.create(req.body)
            .then((newPet)=> {
                console.log("in create");
                console.log(newPet);
                res.json(newPet);
            })
            .catch((err) => {
                console.log("error found in create");
                res.status(400).json(err);
            })
    },

    getOne: (req,res) =>{
        console.log(req.params.id);
        Pet.findById(req.params.id)
            .then((onePet) => {
                console.log("in get one pet ");
                console.log(onePet);
                res.json(onePet);
            })
            .catch((err) =>{
                console.log("error found in get one pet ");
                res.status(400).json(err);
            })
    },

    update: (req, res) => {
        console.log(req.params.id);
    
        Pet.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true,  
        })
            .then((updatedPet) => {
                console.log("in update pet");
                console.log(updatedPet);
                res.json(updatedPet);
            })
            .catch((err) => {
                console.log("error found in update");
                res.status(400).json(err);
            })
    },

    delete:(req,res) => {
        console.log(req.params.id);
        Pet.findByIdAndDelete(req.params.id)
            .then((deletedPet)=> {
                console.log("inside delete pet ");
                console.log(deletedPet);
                res.json(deletedPet);
            })
            .catch((err) => {
                console.log("error found in delete");
                res.status(400).json(err);
            })
    }


}