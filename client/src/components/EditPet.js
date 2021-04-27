import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import PetForm from './PetForm';


const EditPet = (props) => {
    const [errors, setErrors] = useState({});
    const [pet, setPet] = useState({
        petName:"",
        typeOfPet:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:"",
    });

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + props.id)
        .then((res) => {
            console.log(res.data);
            setPet(res.data);
        })
        .catch((err) =>{
            console.log(err.response.data);
            navigate('/');
        })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/'+ props.id, pet)
            .then((res)=>{
                console.log(res.data);
                navigate('/pets/' + props.id);
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
            <h2>Edit Pet</h2>
            <PetForm
                pet={pet}
                setPet={setPet}
                errors={errors}
                submitHandler={submitHandler}
                buttonLabel={"Update Pet"}
            />
        </div>
    )
}

export default EditPet;