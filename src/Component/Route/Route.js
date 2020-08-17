import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from '../Home/Home'
import Profil from '../ProfilDesa/ProfilDesa'
import Pemerintah from '../Pemerintah/Pemerintah'
import Bumkam from '../Bumkam/Bumkam'




export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Route path="/Home/" render={()=><Home/>} />
                
            </Router>
        )
    }
}