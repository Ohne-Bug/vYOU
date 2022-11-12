import React, {Component, useState} from 'react';
import leftArrow from "../assets/img/leftArrow.svg";
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/styleQuizPage.css";

export default function QuizPage () {
    const [questions, setQuestions] = useState([{
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: 0
    }]);
    const [question, setQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [results, setResults] = useState([]);
    const [score, setScore] = useState(0);
    const [resultMsg, setResultMsg] = useState('');

    const getQuestions = async () => {
        const response = await fetch('http://192.168.181.2:3000/api/quiz/get');
        const data = await response.json();
        setQuestions(data.questions);
    }

    React.useEffect(() => {
        getQuestions();
    }, []);

    const selectAnswer = (answer) => {
        results.push(answer);
        setResults([...results]);
        if (answer === questions[question].correctAnswer) {
            if (question === questions.length-1) {
                fetch('http://192.168.181.2:3000/api/quiz/check', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(results)
                }).then(res => res.json()).then(data => {
                    setScore(data.score);
                    setResultMsg('You have everything right!');
                    setShowScore(true);
                });
            }else {
                setQuestion(question + 1);
            }
        }else{
            fetch('http://192.168.181.2:3000/api/quiz/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(results)
            }).then(res => res.json()).then(data => {
                setScore(data.score);
                setResultMsg('The correct answer would be ' + questions[question].answers[questions[question].correctAnswer]+'.');
                setShowScore(true);
            });
        }
    }

    return (
        <div className=''>
            <div className='absolute full-width offset-up-0 offset-right-0  overlay-2'>
                <div className='relative overlay-1 mt-5 ml-3'>
                    <Link to="/on">
                        <button className='relative offset-down-0 ' id="button-back"> <img src={leftArrow} id="left-arrow"/> </button>
                    </Link>
                </div>
                <div className='absolute full-width offset-up-0 offset-right-0' id="grey-stripe-2"></div>
            </div>

            <div className='relative offset-down-10'>
                <div style={{height: '84vh'}}>
                    { showScore ?
                        (<div className="row justify-content-center mt-5 relative offset-down-5" >
                            <div className = "subtitle font-poppins col-9" >Your score: {score} </div>
                            <div className='w-100'></div>
                            <div className = "title font-poppins-medium col-10"> {resultMsg}</div>
                        </div>):
                        (<div style={{height: '84vh'}}>
                            <div className='row justify-content-center mt-5 relative offset-down-5'>
                                <div className = "subtitle font-poppins-medium col-10" style={{marginTop: '100px'}}>{questions[question].question}</div>
                            </div>

                            <div className='row justify-content-center'>
                                <div className='row justify-content-center col-10 mt-5 relative '>
                                    <div style={{marginTop: '100px'}}>
                                        {questions[question].answers.map((answer, i) => {
                                            return <span className='col-3 m-3 '>
                                                        <button className = "button-answer m-3" onClick={() => selectAnswer(i)}>
                                                            <span className='text-white font-poppins-medium xs-subtitle'>{answer} </span>
                                                        </button>
                                                    </span>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
