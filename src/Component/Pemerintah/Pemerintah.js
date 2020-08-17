import React,{Component} from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHistory, faEye,faUsers,faGlobe} from '@fortawesome/free-solid-svg-icons'
import './Pemerintah.css'
import {Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Kadesku from '../Asset/pemerintah/kades.png'
import Struktur from '../Asset/pemerintah/struktur.jpg'

export default class Pemerintah extends Component{
    render(){
        return(
            <Container fluid className="containerProfil">
                <Row> 
                    <div className="headerPemerintah">
                        <h3 className=" section-heading text-uppercase" id="Pemerintah">Struktur Pemerintah</h3>
                        <h3 className="section-subheading text-muted">Berikut adalah struktur pemerintah yang ada pada Kampung Batu Putih
            </h3>
                    </div>
                    <Col sm className="colKades"><Kades /></Col>
                    <Col sm className="colSekam"><Sekam /></Col>
                    <a href={Struktur} className="struktur">Struktur organisasi kampung</a>
                </Row>
            </Container>
        )
    }
}
        

export class Kades extends Component{
    render(){
        return(
            <Card className="cardKades">
  <Card.Body>
    <Card.Title className="Title"><img src={Kadesku} className="kades"></img></Card.Title>
    <Card.Text>
    <h3 className=" section-heading text-uppercase text-center">H.Krisdiyanto</h3>
                        <h3 className="section-subheading text-muted text-center">Kepala kampung
            </h3>
    </Card.Text>
  </Card.Body>
</Card>
        )
    }
}

export class Sekam extends Component{
    render(){
        return(
            <Card className="cardServices">
  <Card.Body>
    <Card.Title className="Title"><img src="" alt="sekretaris kampung" /></Card.Title>
    <Card.Text>
    <h3 className=" section-heading text-uppercase text-center">Sugiyanto</h3>
                        <h3 className="section-subheading text-muted text-center">Sekretaris Kampung
            </h3>
    </Card.Text>
  </Card.Body>
</Card>
        )
    }
}

