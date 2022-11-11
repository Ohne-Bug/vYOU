/* eslint-disable react-hooks/rules-of-hooks */

import React, { Component} from 'react';
import bg from "../assets/img/homepage/homepageCorner.png";
import logo from "../assets/img/homepage/logoNoBG.png"
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";    
import "../assets/css/styleHomepage.css";

 // Save the current date to be able to trigger an update




export default function Homepage () {

    const locale = 'en';
    const [today, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
    }, 60 * 1000);
    return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    
    return (

        <div className = "wrapper-outside  ">

            <div id='background-homepage' className='relative overlay-minus-1'>
                
            </div>

            <div className= "absolute overlay-1 full-width offset-right-0 offset-up-0">
                <img src={bg} />
            </div>

            <div className='absolute overlay-1 full-width offset-right-0 offset-up-0 mt-3'>
                <div className='small-subtitle ml-5 mt-5 main-color'>{date}</div>
                <div className='big-title ml-5 main-color relative offset-up-1'>{time}</div>

                <div className='row justify-content-center relative mt-5'>
                    <img src={logo} id="logo"/>
                </div>
            </div>

            


        </div>
        
        
    )
    
}