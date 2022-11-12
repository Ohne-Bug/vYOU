/* eslint-disable react-hooks/rules-of-hooks */

import React, {Component, useState} from 'react';
import leftArrow from "../assets/img/leftArrow.svg";
import scooter from "../assets/img/scooter.png";
import scooterShadow from "../assets/img/scooterShadow.png";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/bootstrap-override.css";
import "../assets/css/styleScootersPage.css";


import { MapContainer, TileLayer, Marker, Popup, L, MarkerClusterGroup } from 'react-leaflet';
import {Icon} from 'leaflet';

 // Save the current date to be able to trigger an update


export default function ScootersPage () {

    // const ScooterIcon = L.icon({
    //     iconUrl: {scooter},
    //     shadowUrl: {scooterShadow},

    //     iconSize:     [38, 95], // size of the icon
    //     shadowSize:   [50, 64], // size of the shadow
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62],  // the same for the shadow
    //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    // });

    // L.marker([51.5, -0.09], {icon: ScooterIcon}).addTo(map);

    const [positions, setPositions] = useState([]);

    const getPositions = async () => {
        const response = await fetch('http://192.168.181.2:3000/api/helbizscooter/get?lat=45.465730&long=9.182030');
        const data = await response.json();
        setPositions(data.helbizScooter);
    }

    React.useEffect(() => {
        getPositions();
        const timer = setInterval(() => {

            getPositions();

        }, 10 * 60 * 1000);
        return () => clearInterval(timer);

    }, []);

    // const L = require('leaflet');

    // const myIcon = L.icon({
    //     iconUrl: {scooter},
    //     iconSize:     [38, 95], // size of the icon
    //     shadowSize:   [50, 64], // size of the shadow
    //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62],  // the same for the shadow
    //     popupAnchor:  [-3, -76]
    // });

    return (

        <div className = "">

            <div className='absolute full-width offset-up-0 offset-right-0  overlay-2'>
                <div className='relative overlay-1 mt-5 ml-3'>
                    <button className='relative offset-down-0 ' id="button-back"> <img src={leftArrow} id="left-arrow"/> </button>
                </div>

                <div className='absolute full-width offset-up-0 offset-right-0' id="grey-stripe-2"></div>

           </div>

            <div  className='relative offset-down-10'>

                <MapContainer style={{height:'100vh'}} center={[51.505, -0.09]} zoom={100} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {positions.map(position => (
                    <Marker icon={new Icon({iconUrl: scooter, shadowUrl: scooterShadow,  iconSize: [190, 190], shadowSize: [200, 200], iconAnchor: [12, 41]})} position={[position.lat, position.lon]}>
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
