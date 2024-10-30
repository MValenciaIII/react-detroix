import React from "react";
import LogoImage from '../images/logo.png'

function Header() {

    return(
        <div className="row">
            <Topbarlink />
            <Topbarnav />
            <Logo />
            <Navbar />
        </div>
    )
}

function Topbarlink() {

    return (
        <div className="col-6 topBar">
            <p><a href="#">WWW.DEMOLINK.ORG</a></p>
        </div>
    )
}

function Topbarnav() {
    return (
        <div className="col-6 topBarNav">
            <ul className="list-group list-group-horizontal d-flex justify-content-end">
                <li>SUPPORT |</li>
                <li>FAQS |</li>
                <li>SITEMAP |</li>
                <li>HELP |</li>
            </ul>
        </div>
    )
}

function Logo() {

    return(
        <div className="col-6 logo">
            <img src="https://mvalenciaiii.github.io/detroix/media/logo.png" alt="A logo on the page that says DETROIX" />
        </div>
    )
}

function Navbar() {

    return(
        <div className="col-6 mainNavButtons mt-5">
            <ul className="list-group list-group-horizontal d-flex justify-content-center">
                <li><button>HOME</button></li>
                <li><button>ABOUT</button></li>
                <li><button>SERVICES</button></li>
                <li><button>FAQS</button></li>
                <li><button>CONTACTS</button></li>
            </ul>
        </div>
    )
}

export default Header;