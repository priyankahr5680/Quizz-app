import { useEffect, useState } from 'react';
import Timer from './Timer';
import './quizz.css'
import Trivia from './Trivia';

const Quiz = () => {
    let[questionNumber,setQuestionNumber]=useState(1)
    let[stop,setStop]=useState(false)
    let[earned,setEarned]=useState("$ 0")
    let data=[
        {
        id:1,
        question:"Which of the following is used in React.js to increase performance?",
        answers:[
            {
                text:"virtual Dom",
                correct:true,
            },
            {
                text:"Original Dom",
                correct:false,
            },
            {
               text:"Both A and B",
               correct:false, 
            },
            {
                text:"None of the above",
                correct:false,
            },
        ]
        },
        {
         id:2,
         question:"who created React.js?",
         answers:[
            {
                text:"Jordan Mike",
                correct:false,
            },
            {
                text:"Jordan Walke",
                correct:true,
            },
            {
                text:"Tim Lee",
                correct:false,
            },
            {
                text:"Jordan Lee",
                correct:false,
            }
         ]
        },
        {
            id:3,
            question:"In which language is React.js written?",
            answers:[
               {
                   text:"Python",
                   correct:false,
               },
               {
                   text:"Java Script",
                   correct:true,
               },
               {
                   text:"Java",
                   correct:false,
               },
               {
                   text:"PHP",
                   correct:false,
               }
            ]
           },
           {
            id:4,
            question:"In MVC,what does React.js act as?",
            answers:[
               {
                   text:"Model",
                   correct:false,
               },
               {
                   text:"Controller",
                   correct:false,
               },
               {
                   text:"View",
                   correct:true,
               },
               {
                   text:"Middleware",
                   correct:false,
               }
            ]
           }

    ];
    let moneyPyramid=
        [
        {id:1,amount:"$ 100"},
        {id:2,amount:"$ 200"},
        {id:3,amount:"$ 300"},
        {id:4,amount:"$ 500"},
        {id:5,amount:"$ 1000"},
        {id:6,amount:"$ 2000"},
        {id:7,amount:"$ 4000"},
        {id:8,amount:"$ 8000"},
        {id:9,amount:"$ 16000"},
        {id:10,amount:"$ 32000"},
        {id:11,amount:"$ 64000"},
        {id:12,amount:"$ 125000"},
        {id:13,amount:"$ 250000"},
        {id:14,amount:"$ 500000"},
        {id:15,amount:"$ 1000000"},

    ].reverse();

       
    useEffect(()=>{
         questionNumber >1 && setEarned(moneyPyramid.find(m=>m.id===questionNumber-1).amount)
    },[moneyPyramid,questionNumber])
    return ( 
        <div className="quiz_app">
            <div className='main'> 
            {stop ? <h1 className='endText'>you earned:{earned}</h1> :(
 <>
               <div className='top'>
                  <div className='timer'>
                    <Timer setStop={setStop} questionNumber={questionNumber}/>
                  </div>
               </div>
               <div className='bottom'>
                <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
                </div>
                </>
                )}
            </div>
          

                <div className='pyramid'>
                <ul className='moneyList'>
                    {moneyPyramid.map((m)=>(
                         <li className={questionNumber===m.id ?"moneyListItem active":"moneyListItem"}>
                         <span className='moneyListItemNumber'>{m.id}</span>
                         <span className='moneyListItemAmount'>{m.amount}</span>
                       </li>
                    ))}
                 
                  
                </ul>
                </div>

        </div>
        
     );
}
 
export default Quiz;