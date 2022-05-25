import React, { useState } from "react";
import { TextInput } from '@mantine/core';


const Acquisitions = () =>{
    
    const [inputs, setInputs] = useState(
        {
            name: "",
            author: "",
            description: "",
            available: ""
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
        <div className="acq">
            <h1>Add a Book</h1>
            <form onSubmit={handleSubmit}>
            <TextInput label="Name" 
            value={inputs.name} 
            onChange={handleChange}
            name="name" />

            <TextInput label="Author" 
            value={inputs.author} 
            onChange={handleChange}
            name="author" />

            <TextInput label="Description" 
            value={inputs.description} 
            onChange={handleChange}
            name="description" />

            <button type="submit">Add Book</button>

            
        </form>
        </div>
        
    )


};

export default Acquisitions;

