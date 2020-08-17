import React, { Component } from 'react';
import {Navbar,Nav,Carousel} from 'react-bootstrap';
import Logo from '../Asset/logodesa/Logo.png'
import './Navbar.css';
import Logo1 from '../Asset/kegiatan/1.jpg'
import Logo2 from '../Asset/kegiatan/2.jpg'
import Logo3 from '../Asset/kegiatan/3.jpg'


export default class Header extends Component{
  render(){
    return(
      <div>
        <div><NavbarToolbars /></div>
        <div><CaraouselImage /></div>
      </div>
    )
  }
}

export class NavbarToolbars extends Component{
    render(){
        return(
            <div className="Navbar"><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="Home" to="/Home">
                <img src={Logo} className="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbrand ml-auto">
                <Nav.Link href="/#Profile" to="/Home/">Profile</Nav.Link>
                <Nav.Link href="#Berita">Berita</Nav.Link>
                <Nav.Link href="/#Bumkam">BUMKAM</Nav.Link>
                <Nav.Link href="/#Pemerintah">Struktur Pemerintah</Nav.Link>
                <Nav.Link href="#Kontak">Hubungi Kami</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar></div>
        )
    };
}

export class CaraouselImage extends Component{
  render(){
      return(
<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Logo1}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>Kegiatan desa</h3>
    <p>kegiatan rapat bersama masyarakat</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Logo2}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Pembinaan Kader Posyandu</h3>
    <p>optimalisasi peran posyandu ditengah pandemi covid19</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={Logo3}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Monitoring Program Berau Sehat</h3>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
      )
  }
}