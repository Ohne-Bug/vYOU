/* eslint-disable react-hooks/rules-of-hooks */

import React, { Component} from 'react';
import leftArrow from "../assets/img/leftArrow.svg";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";    
import "../assets/css/bootstrap-override.css";   
import "../assets/css/styleScootersPage.css";  
 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

 // Save the current date to be able to trigger an update




export default function ScootersPage () {

    
    
    
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

                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                </MapContainer>

            </div>


        </div>
        
        
    )
    
}