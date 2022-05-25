import React, { useState } from "react";
import { TextInput } from '@mantine/core';


const Patrons = () =>{
    
    const [inputs, setInputs] = useState(
        {
            name: "",
            class: "",
            phoneno: ""
        }
    );

    const handleChange =  (e) => {
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target.name, "Value", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    return (
            <div className="patrons">
            <form onSubmit={handleSubmit}>
            <TextInput label="Name" 
            value={inputs.name} 
            onChange={handleChange}
            name="name" />

            <TextInput label="Class" 
            value={inputs.class} 
            onChange={handleChange}
            name="author" />

            <TextInput label="Phone Number" 
            value={inputs.phoneno} 
            onChange={handleChange}
            name="description" />

            <button type="submit">Add Patron</button>

            
            </form>
            </div>
            

        
    )


};

export default Patrons;

