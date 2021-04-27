import React, { useState } from 'react';
import axios from 'axios';
import {navigate , Link} from '@reach/router';
import PetForm from './PetForm';

const NewPet = (props) => {
    const [errors, setErrors] = useState({});
    const [newPet, setNewPet] = useState({
        petName:"",
        typeOfPet:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:"",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', newPet)
            .then((res)=>{
                console.log(res.data);
                navigate('/')
            })
            .catch((err)=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div>
            <Link to={'/'}>
                <p className="homeBtn">Back to home</p>
            </Link>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <PetForm
                pet={newPet}
                setPet={setNewPet}
                errors={errors}
                submitHandler={submitHandler}
                buttonLabel={"Add New Pet"}
            />
        </div>
    )
}

export default NewPet;