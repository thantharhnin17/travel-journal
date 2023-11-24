import React from "react";
import { ReactDOM } from "react";
import GPS from '../images/gps.png';

function Card(props) {
    return (
        <section>
            <div className='card'>
                <div className='card--head'>
                    <img src={require(`../images/${props.img}`)} className='card--img'/>
                </div>
                <div className='card--body'>
                    <div className='card--location'>
                        <img src={GPS} className=''/>
                        <span>{props.location.country}</span>
                        <a href="{props.location.gps}">View on Google Maps</a>
                    </div>
                    <div className='card--title'>
                        <h1>{props.title}</h1>
                    </div>
                    <div className='card--time'>
                        <span>{props.time}</span>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>

        </section>
    )
}

export default Card;