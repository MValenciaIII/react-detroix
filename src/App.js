import React from 'react'
import './style.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
//!HOW TO IMPORT LOCAL IMAGES
import placeholder from './images/400.svg'


function App() {

    return(

        <div className="container websiteBackground ">
           <Header />
           <Body />
           <Footer />
        </div>
    )
}

export default App;