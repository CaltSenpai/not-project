import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import axios from "axios";


export default function Checkout(){

    const [inputs, setInputs] = useState(
        {
            isbn: "",
            pid: "",
            date: "",
            type: "Check-Out"
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
        sendRequest().then( ()=> {
            setInputs(
                {
                    isbn: "",
                    pid: "",
                    date: "",
                    type: "Check-Out"
                }
            )
        });
    }

    const sendRequest = async () => {
        await axios
          .post("http://localhost:5000/transactions", {
            isbn: String(inputs.isbn),
            pid: String(inputs.pid),
            date: String(inputs.date),
            type: String(inputs.type)
        })
          .then((res) => res.data);
      };

    return(
        <div className ='check-out'>
            <h1>Borrow a Book</h1>
            <form onSubmit={handleSubmit}>

            <TextInput  label="ISBN" 
             value={inputs.isbn}
             onChange={handleChange}
             name="isbn" />

            <TextInput label="Patron ID" 
             value={inputs.pid} 
             onChange={handleChange} 
             name="pid"/>

            <TextInput label="Date of Check-Out ( DD-MM-YYYY)" 
             value={inputs.date} 
             onChange={handleChange} 
             name="date"/>
             
            <Button type="submit" variant="filled">Check Out</Button>

            </form>
        </div>
    );
}