import React from 'react';


const PetForm = (props) => {
    const{pet,setPet ,errors,submitHandler,buttonLabel} = props;


    const inputChange = (e) =>{
        console.log("e.target.name: " +e.target.name);
        console.log("e.target.value: " +e.target.value);

        let newStateObject = { ...pet }; //copy of the current state object
        newStateObject[e.target.name ]= e.target.value;
        setPet(newStateObject);

    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                <label>Pet Name: </label>
                    {
                        errors.petName ?
                        <span className="error-text">{errors.petName.message}</span>
                        : null
                    }
                    <input
                        type="text"
                        name="petName"
                        value={pet.petName}
                        onChange={inputChange}
                    />
                </div>
                <div>
                    <label>Type of Pet: </label>
                    {
                        errors.typeOfPet ?
                        <span className="error-text">{errors.typeOfPet.message}</span>
                        : null
                    }
                    <input
                        type="text"
                        name="typeOfPet"
                        value={pet.typeOfPet}
                        onChange={inputChange}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    {
                        errors.description ?
                        <span className="error-text">{errors.description.message}</span>
                        : null
                    }
                    <input
                        type="text"
                        name="description"
                        value={pet.description}
                        onChange={inputChange}
                    />
                </div>
                <div>
                    <label>Skill #1: </label>
                    {
                        errors.skillOne ?
                        <span className="error-text">{errors.skillOne.message}</span>
                        : null
                    }
                    <input
                        type="text"
                        name="skillOne"
                        value={pet.skillOne}
                        onChange={inputChange}
                    />
                </div>
                <div>
                    <label>Skill #2: </label>
                    {
                        errors.skillTwo ?
                        <span className="error-text">{errors.skillTwo.message}</span>
                        : null
                    }
                    <input
                        type="text"
                        name="skillTwo"
                        value={pet.skillTwo}
                        onChange={inputChange}
                    />
                </div>
                <div>
                    <label>Skill #3: </label>
                    {
                        errors.skillThree ?
                        <span className="error-text">{errors.skillThree.message}</span>
                        : null
                    }
                    <input
                        type="text"
                        name="skillThree"
                        value={pet.skillThree}
                        onChange={inputChange}
                    />
                </div>
                <button>{ buttonLabel }</button>
            </form>
        </div>
    )
}
export default PetForm;