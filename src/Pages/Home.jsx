
import { Button } from '@mantine/core';
import Books from "./Book/Books";
import axios from "axios";
import  { useState } from "react";
import Transactions from './Transactions/Transactions';



export default function Home(){

    const [data, setData] = useState([]);

    const allBooks = async ()=> {
          const result = await axios("http://localhost:5000/books");
          setData(result.data.books);
        console.log(result.data.books);
          document.getElementById("bookcomp").style.visibility = "visible";
      
    };

    const allTransactions = async ()=> {
        const result = await axios("http://localhost:5000/transactions");
        // setData(result.data.transactions);
        console.log(result.data.transactions);
        document.getElementById("transComp").style.visibility = "visible";
    }

    return(
        <div className="home">
            <h1>Dashboard</h1>
            <div>
            <Button variant="filled" onClick={()=>allBooks()}>All Books</Button>
                
            
            <Button variant="filled" onClick={()=>allTransactions()}>Recent Transactions</Button>
            <Books data={data} />
            <Transactions data = {data} />
            
            </div>
        </div>

    );
}