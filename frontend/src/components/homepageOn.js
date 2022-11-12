/* eslint-disable react-hooks/rules-of-hooks */

import React, { Component} from 'react';
import bg from "../assets/img/homepage/homepageCorner.png";
import logo from "../assets/img/homepage/logoNoBG.png";
import quotes from "../assets/img/quotes.svg";
import bike from "../assets/img/bike.svg";
import scooter from "../assets/img/scooter.svg";
import quiz from "../assets/img/quiz.svg";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";    
import "../assets/css/bootstrap-override.css";   
import "../assets/css/styleHomepageOn.css";

 // Save the current date to be able to trigger an update




export default function HomepageOn () {

    const locale = 'en';
    const [today, setDate] = React.useState(new Date());
    const [tip, setTip] = React.useState("Reduce the amount of meat and animal products in your diet.");

    
    
    const updateTip = () => {

        fetch('http://192.168.181.2:3000/api/ecotips/get')
        .then(response => response.json()).then(json => setTip(json.ecoTip));
    }

    const getFontSize = ( length ) => {
        return (5 * 51) / (((2*51) + length)/3);
    }
    
    React.useEffect(() => {
        updateTip();
        const timer = setInterval(() => { 

            updateTip();
            
        }, 60 * 1000);
        return () => clearInterval(timer);
        
    }, []);
    

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

    const [bikes, setBikes] = React.useState(0);
    const [people, setPeople] = React.useState(0);

    const setToFiveDigits = (n) => {

        let prepended_out = 
              String(n).padStart(5, '0');

              return prepended_out;
              
    }

    

    
    return (

        <div className = "wrapper-outside  ">   

            <div className='absolute overlay-1 full-width offset-right-0 offset-up-0'>
                <div className='row relative '>
                    <div className='col-5'>
                        <img src={logo} id="logo2"/>
                    </div>
                    <div className='col-6 mt-5 offset-up-3'>
                        <div className='subtitle ml-5 mt-5 main-color font-poppins-medium'> 30°C </div>
                        <div className='small-subtitle ml-5  main-color font-poppins'>{date}</div>
                        <div className='title ml-5 main-color relative offset-up-1 font-poppins '>{time}</div>
                    </div>
                </div>
                <div className='row relative offset-up-3'>
                    <div className='col-6 row justify-content-center'>
                        <div className='row justify-content-center'>
                            <div className='small-subtitle font-poppins-medium text-grey '> BIKES today</div>
                            <div className='w-100'></div>
                            <div className='title  font-poppins-medium text-white'>{setToFiveDigits(bikes)}</div>
                            <div className='w-100'></div>
                            <div className='green-rectangle absolute offset-right-0 offset-up-0 overlay-minus-1 col-9 offset-up-6'></div>
                        </div>
                    </div>
                    <div className='col-6 row justify-content-center'>
                        <div className='small-subtitle font-poppins-medium text-grey '> PEOPLE walking</div>
                        <div className='w-100'></div>
                            <div className='title  font-poppins-medium text-white'>{setToFiveDigits(people)}</div>
                            <div className='w-100'></div>
                            <div className='green-rectangle absolute offset-right-0 offset-up-0 overlay-minus-1 col-9 offset-up-6'></div>
                    </div>
                </div>

                <div className='row relative offset-up-3  justify-content-center  '>

                    <div className='relative row overlay-1 justify-content-center mt-5  '>

                        <div className='col-10  font-poppins-medium text-white' style={{fontSize : getFontSize(tip.length) + 'vw'}}> {tip} </div>

                    </div>

                    <div className='absolute offset-left-10 offset-up-3 overlay-1'>

                        <img src={quotes} className="quotes-symbol" />

                    </div>

                    <div className='absolute offset-left-80 offset-down-12 overlay-1'>

                        <img src={quotes} className="quotes-symbol vertical-flip"  />

                    </div>

                    <div className='absolute offset-left-0 offset-up-0' id="green-stripe">
                        
                    </div>
                </div>

                <div className='row absolute offset-down-0 full-width  justify-content-center  '>


                    <div className=' relative offset-down-17'>
                        <Link to="/bikes-page">
                            <button className='col-3 m-4 button'>
                                <img src={bike} id="bike-logo"/>
                            </button>
                        </Link>

                        <Link to="/scooters-page">
                            <button className='col-3 m-4 button'>
                                <img src={scooter} id="scooter-logo"/>
                            </button>
                        </Link>

                        <Link to="/quiz-page">
                            <button className='col-3 m-4 button'>
                                <img src={quiz} id="quiz-logo"/>
                            </button>
                        </Link>

                    </div>
                    
                </div>



            </div>


        </div>
        
        
    )
    
}