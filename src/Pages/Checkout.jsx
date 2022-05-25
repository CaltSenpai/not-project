import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';


export default function Checkout(){
    const [value, setValue] = useState('');

    return(
        <div className ='check-out'>
            <h1>Borrow a Book</h1>
            <TextInput label="Patron ID" value={value} onChange={(event) => setValue(event.currentTarget.value)} />
            <TextInput label="Barcode No." value={value} onChange={(event) => setValue(event.currentTarget.value)} />
            <div className="data">
                
            </div>
            <Button variant="filled">Check Out</Button>
        </div>
    );
}