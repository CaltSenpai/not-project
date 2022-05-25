import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';


export default function Checkin(){
    const [value, setValue] = useState('');
    
    return(
        <div className="check-in">
            <h1>Book Details</h1>
            <TextInput label="Book ID" value={value} onChange={(event) => setValue(event.currentTarget.value)} />
            <div className="displayBox">
                
            </div>
            <Button variant="filled">Check In</Button>
        </div>
    )
}