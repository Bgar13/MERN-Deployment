import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllPets = () => {
    const [allPets , setAllPets] = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then((res) =>{
                console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return(
        <div>
            <Link to={`/pets/new`}>
                <p className="addBtn">add a pet to the shelter</p>
            </Link>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home </h3>
                <table>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                {
                    allPets.map((pet,index) => (
                        <tr key={index}>
                            <td>{pet.petName}</td>
                            <td>{pet.typeOfPet}</td>
                            <td>
                                <Link to={`/pets/${pet._id}`}>Details |</Link>
                                <Link to={`/pets/${pet._id}/edit`}>Edit </Link>
                            </td>
                        </tr>
                    ))
                }
                </table>

        </div>
    )
}

export default AllPets;