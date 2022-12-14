/* eslint-disable react-hooks/rules-of-hooks */

import React, {Component, useState} from 'react';
import leftArrow from "../assets/img/leftArrow.svg";
import scooter from "../assets/img/scooter.png";
import scooterShadow from "../assets/img/scooterShadow.png";
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleScootersPage.css";


import { MapContainer, TileLayer, Marker, Popup, L, MarkerClusterGroup } from 'react-leaflet';
import {Icon} from 'leaflet';
import {getLoc} from "../util/locationUtil";

 // Save the current date to be able to trigger an update


export default function ScootersPage () {

    const [positions, setPositions] = useState([]);

    const getPositions = async () => {
        const response = await fetch('http://192.168.181.2:3000/api/helbizscooter/get?lat=' + getLoc()[0] + '&long=' + getLoc()[1]);
        const data = await response.json();
        setPositions(data.helbizScooter);
    }

    React.useEffect(() => {
        getPositions();
    }, []);


    return (

        <div className = "">

            <div className='absolute full-width offset-up-0 offset-right-0  overlay-2'>
                <div className='relative overlay-1 mt-5 ml-3'>
                    <Link to="/on">
                        <button className='relative offset-down-0 ' id="button-back"> <img src={leftArrow} id="left-arrow"/> </button>
                    </Link>
                </div>

                <div className='absolute full-width offset-up-0 offset-right-0' id="grey-stripe-2"></div>

           </div>

            <div  className='relative offset-down-10'>

                <MapContainer style={{height:'84vh'}} center={getLoc()} zoom={100} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {positions.map(position => (
                    <Marker icon={new Icon({iconUrl: scooter, shadowUrl: scooterShadow,  iconSize: [110, 110], shadowSize: [115, 115], iconAnchor: [12, 41]})} position={[position.lat, position.lon]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                ))}
                </MapContainer>

            </div>


        </div>


    )

}
