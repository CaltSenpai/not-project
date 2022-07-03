import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <div className='landing'>
        <h1>Welcome to Lib-Man</h1>
        <h2>Our simple to use library management system!</h2>
        <h3>Use the sidebar to navigate to the different sections of the app!</h3>
        <hr/>
        <h2>Home </h2>
        <h3>Primary dashboard section that allows the admin to keep a track of the current books within the library. It also has a provision to display the recent transactions.  </h3>
        <h2>Check In / Check Out </h2>
        <h3>Transaction section wherein the admin can enter the details of a transaction, whenever a book is being borrowed from the library or being returned by a fellow patron.</h3>
        <h2>Patrons </h2>
        <h3>Helps admin to add new patrons (users) to the library. It also helps the admin to view a list of the existing patrons.</h3>
        <h2>Acquisitions</h2>
        <h3>Section that helps the admin to enter the details of a new book that has been acquired by the library.</h3>
    </div>
  )
}

export default Landing;