import React, {Component, useState} from 'react';
import leftArrow from "../assets/img/leftArrow.svg";

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
        if (question < questions.length-1){
            setResults([...results, answer]);
            if (answer === questions[question].correctAnswer) {
                setQuestion(question + 1);
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
        }else{
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
        }
    }

    return (
        <div className=''>
            <div className='absolute full-width offset-up-0 offset-right-0  overlay-2'>
                <div className='relative overlay-1 mt-5 ml-3'>
                    <button className='relative offset-down-0 ' id="button-back"> <img src={leftArrow} id="left-arrow"/> </button>
                </div>
                <div className='absolute full-width offset-up-0 offset-right-0' id="grey-stripe-2"></div>
            </div>

            <div className='relative offset-down-10'>
                <div style={{height: '84vh'}}>
                    { showScore ?
                        (<div style={{height: '84vh'}}>
                            <div style={{marginTop: '100px'}}>Your score: {score}. {resultMsg}</div>
                        </div>):
                        (<div style={{height: '84vh'}}>
                            <div style={{marginTop: '100px'}}>{questions[question].question}</div>
                            <div style={{marginTop: '100px'}}>
                                {questions[question].answers.map((e, i) => i).map((answer) => {
                                    return <button onClick={() => selectAnswer(answer)}>{questions[question].answers[answer]}</button>
                                })}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
