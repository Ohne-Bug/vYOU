/* eslint-disable react-hooks/rules-of-hooks */

import React, { Component} from 'react';
import leftArrow from "../assets/img/leftArrow.svg";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";    
import "../assets/css/bootstrap-override.css";   
import "../assets/css/styleScootersPage.css";   

 // Save the current date to be able to trigger an update




export default function ScootersPage () {

    

    
    return (

        <div className = "wrapper-outside">   

            <div className='absolute full-width offset-up-0 offset-right-0  overlay-1'>
                <div className='relative overlay-1 mt-5 ml-3'>
                    <button className='relative offset-down-0 ' id="button-back"> <img src={leftArrow} id="left-arrow"/> </button>
                </div>

                <div className='absolute full-width offset-up-0 offset-right-0' id="grey-stripe-2"></div>

           </div>

           

        </div>
        
        
    )
    
}