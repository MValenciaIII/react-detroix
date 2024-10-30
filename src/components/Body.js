import React from "react";
import Blogitem from "./Blogitem";
import placeholder from '../images/logo.png'


function Body() {

    return(
        <div className="row">
            <HeroImage />
            <HeroCarousel />
            <Blogitem europe="SMART" media="https://mvalenciaiii.github.io/detroix/media/puzzle.png" paragraphText="            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum, ipsum voluptates debitis nulla aliquam suscipit similique doloribus, reiciendis nihil deleniti, rerum dolores. Esse, hic unde? Totam maxime libero voluptas!
"/>

            <Blogitem europe="STRONG" media="https://mvalenciaiii.github.io/detroix/media/hand.png" paragraphText="            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum, ipsum voluptates debitis nulla aliquam suscipit similique doloribus, reiciendis nihil deleniti, rerum dolores. Esse, hic unde? Totam maxime libero voluptas!
"/>

            <Blogitem europe="STABLE" media="https://mvalenciaiii.github.io/detroix/media/maze.png" paragraphText="            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum, ipsum voluptates debitis nulla aliquam suscipit similique doloribus, reiciendis nihil deleniti, rerum dolores. Esse, hic unde? Totam maxime libero voluptas!" bool={true}/>

        </div>
    )
}

function HeroImage() {


    return(
        <div className="col-12">
            <img className="img-fluid" src="https://mvalenciaiii.github.io/detroix/media/thinkbig.img.png" alt="" />
        </div>
    )
}

function HeroCarousel() {

    return(
        <div className="col-12 d-flex justify-content-center carouselGroup">
            <ul className="list-group list-group-horizontal">
                <li><input className="list-group-item carouselButton rounded-circle" type="button" value="" /></li>
                <li><input className="list-group-item carouselButton rounded-circle" type="button" value="" /></li>
                <li><input className="list-group-item carouselButton rounded-circle" type="button" value="" /></li>
            </ul>
        </div>
    )
}




export default Body;