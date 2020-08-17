import React,{Component} from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHistory, faEye,faUsers,faGlobe} from '@fortawesome/free-solid-svg-icons'
import './Bumkam.css'
import {Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom'



export default class Profil extends Component{
    render(){
        return(
            <Container fluid className="containerProfil">
                <Row> 
                    <div className="header" >
                        <h3 className=" section-heading text-uppercase" id="Profile">Profil Desa</h3>
                        <h3 className="section-subheading text-muted">Berikut adalah Profil desa yang akan kami berikan kepada anda
            </h3>
                    </div>
                    <Col sm className="colSejarah"><Sejarah /></Col>
                    <Col sm className="colVisi"><VisiMisi /></Col>
                    
                </Row>
            </Container>
        )
    }
}
        

export class Sejarah extends Component{
    render(){
        return(
            <Card className="cardSejarah">
 <Card.Header className="sejarahHeader">
       <FontAwesomeIcon icon={faHistory} size="4x" color="gold"
                mask={['far', 'circle']}/></Card.Header>
  <Card.Body>
    <Card.Title className="Title">Sejarah</Card.Title>
    <Card.Text>
    Pemerintahan Kampung Batu Putih telah mengalami beberapa fase pergantian kepemimpinan. Menurut sumber yang dihimpun dari tokoh masyarakat hingga saat ini telah tercatat 12 kali terjadi peralihan kepemimpinan, namun ada beberapa yang tidak diketahui dengan pasti masa jabatannya.
    </Card.Text>
    
    <Router>
    <Link to ="/SejarahDesa">
        <Button variant="primary" >
           Lihat Selengkapnya
        </Button>   
</Link>
    </Router>

  </Card.Body>
</Card>
        )
    }
}

export class VisiMisi extends Component{
    render(){
        return(
            <Card className="cardVisi">
  <Card.Header className="headerVisi">
       <FontAwesomeIcon icon={faEye} size="4x" color="gold"
                mask={['far', 'circle']} className="fasVisi" /></Card.Header>
  <Card.Body>
    <Card.Title className="Title">Visi Misi</Card.Title>
    <Card.Text>
    Visi Kampung adalah "“Mewujudkan Masyarakat Kampung Batu Putih “ BANGKIT “"
Misi Kampung Batu Putih adalah Memakmurkan seluruh elemen masyarakat Kampung Batu Putih
    </Card.Text>
    <Router>
    <Link to ="/VisiMisi">
        <Button variant="primary"  className="btnVisi">
           Lihat Selengkapnya
        </Button>   
    </Link>
    </Router>

  </Card.Body>
</Card>
        )
    }
}

