import React, { Component } from 'react';
import jwt_decode from "jwt-decode";
class HomePage extends Component {
    render() { 
        var token = localStorage.getItem('token');
       return ( <h1>home Page</h1> );
    }
}
 
export default HomePage;