import React from "react";

function Blogitem(props) {
    console.log(props)

    return(
        <div className="col-4 blogBorder">
            <div className="container">
                <div className="row blogTitle">
                    <div className="col-12">
                    <h1>
                        {props.europe}
                    </h1>
                    </div>
                </div>
                <div className="row blogImg">
                    <div className="col-12">
                        <img className="img-fluid" src={props.media} alt="" />
                    </div>
                </div>
                <div className="row blogDescription">
                    <div className="col-12">
                        <p>{props.paragraphText}</p>
                    </div>
                </div>
                <div className="row blogButton">
                    <div className="col-12">
                        <input className="rounded" type="button" value="MORE" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogitem;