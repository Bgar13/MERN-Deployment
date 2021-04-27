import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate , Link} from '@reach/router';

const PetDetails = (props) => {
    const [pet, setPet] = useState({});
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets/' + props.pet_id)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    },[]);

    const deletePet = () => {
        axios.delete('http://localhost:8000/api/pets/' + props.pet_id)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }

    return(
        <div>
            <Link to={'/'}>
                <p className="homeBtn">Back to home</p>
            </Link>
            <button onClick={ deletePet } className="deleteBtn">Adopt {pet.petName}</button>
            <h1>Pet Shelter</h1>
            <h3>Details about: {pet.petName}</h3>
            <div className="petDetail">
                <p>Type of pet : {pet.typeOfPet}</p>
                <p>Description: {pet.description}</p>
                <p>Skill #1: {pet.skillOne}</p>
                <p>Skill #2: {pet.skillTwo}</p>
                <p>Skill #3: {pet.skillThree}</p>
            </div>
        </div>
    )
}

export default PetDetails;