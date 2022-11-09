import React from 'react'
import moment from 'moment'
const Navbar = () => {

    const getTimeandDate = () =>{
        return moment().format("ddd, MMM Do, h:mm a");
    }
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{backgroundColor: "#1e2f97"}}>
        <div className="container navbar-container">
       <div>
       <img src={require('./logo.jpeg')} height='30px' width='30px' style={{marginRight:'5px'}} className="d-inline-block align-top" alt=""/>
       <a class="navbar-brand" style={{color: "white"}}href="#">TutorMe</a>
       </div>
  
        
            <span class="navbar-text" style={{color: "white"}}>
            {getTimeandDate()}
            </span>
        
        </div>
    </nav>
    )
}

export default Navbar
