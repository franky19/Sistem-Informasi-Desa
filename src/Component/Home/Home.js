import React,{ Component } from 'react';
import Header from '../NavBar/Navbar'
import Profil from '../ProfilDesa/ProfilDesa'
import Bumkam from '../Bumkam/Bumkam'
import './Home.css';
import Pemerintah from '../Pemerintah/Pemerintah'




export default class Home extends  Component{
render(){
    return(
        <div>
            <div><Header /></div>
            <div><Profil /></div>
            <div><Bumkam/></div>
            <div><Pemerintah /></div>
        </div>
        
        
    )
}
}