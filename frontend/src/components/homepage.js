import React, { Component } from 'react';
import bg from "../assets/img/homepage/homepageCorner.png";
import logo from "../assets/img/homepage/logoNoBG.png"
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";    
import "../assets/css/styleHomepage.css";

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

export default class Homepage extends Component {

    
    render () {
        return (

            <div className = "wrapper-outside  ">

                <div id='background-homepage' className='relative overlay-minus-1'>
                   
                </div>

                <div className= "absolute overlay-1 full-width offset-right-0 offset-up-0">
                    <img src={bg} />
                </div>

                <div className='absolute overlay-1 full-width offset-right-0 offset-up-0 mt-3'>
                    <div className='subtitle ml-5 mt-5 main-color'>{date}</div>
                    <div className='big-title ml-5 main-color relative offset-up-1'>13:59</div>

                    <div className='row justify-content-center relative mt-5'>
                        <img src={logo} id="logo"/>
                    </div>
                </div>

                


            </div>
            
            
        )
    }
}