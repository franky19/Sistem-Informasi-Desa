import React,{Component} from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHistory, faEye,faUsers,faGlobe} from '@fortawesome/free-solid-svg-icons'
import './ProfilDesa.css'
import {Link, BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SejarahDesa from './SejarahDesa'

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
                    <Col sm className="colWilayah"><Wilayah/></Col>
                    <Col sm className="colPenduduk"><Penduduk/></Col>
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

export class Wilayah extends Component{
    render(){
        return(
            <Card className="cardWilayah">
  <Card.Header className="wilayahHeader" >
       <FontAwesomeIcon icon={faGlobe} mask={['far', 'circle']} size="4x" color="gold" className="fasWilayah" /></Card.Header>
  <Card.Body>
    <Card.Title className="Title">Wilayah</Card.Title>
    <Card.Text>
    Kampung Batu Putih berbatasan langsung dengan Kampung Tembudan bagian Timur. Bagian Barat berbatasan dengan Kampung Lobang Kelatak. Bagian Selatan berbatasan dengan Laut Sulawesi dan bagian Utara berbatasan dengan Kabupaten Kutai Timur Provinsi Kalimantan Timur.
    </Card.Text>
    <Router>
    <Link to ="/Wilayah">
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

export class Penduduk extends Component{
    render(){
        return(
            <Card className="cardPenduduk">
  <Card.Header className="PendudukHeader" >
       <FontAwesomeIcon icon={faUsers} mask={['far', 'circle']} size="4x" color="gold" className="fasPenduduk" /></Card.Header>
  <Card.Body>
    <Card.Title className="Title">Penduduk</Card.Title>
    <Card.Text>
    Kampung Batu Putih memiliki 783 Kepala Keluarga, jika dihitung secara keseluruhan terdapat 2.840 jiwa penduduk dengan klasifikasi perempuan 1.357 jiwa dan Laki-laki sebanyak 1.483 jiwa. Setiap tahunnya jumlah penduduk di Kampung tersebut mengalami perubahan. Hal ini disebabkan karena faktor migrasi penduduk, kelahiran dan kematian. Adapun data umum penduduk yang dimuat dalam Profil Kampung yaitu : Karakteristik berdasarkan jenis kelamin, tingkat pendidikan, status perkawinan, dan agama.
    </Card.Text>
    <Router>
    <Link to ="/Penduduk">
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