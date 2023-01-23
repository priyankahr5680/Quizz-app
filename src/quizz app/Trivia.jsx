import { useEffect, useState } from 'react';
import './Trivia.css'
const Trivia = ({data,setStop,questionNumber,setQuestionNumber}) => {
    const[question, setQuestion]=useState(null);
    const[selectAnswer,setSelectanswer]=useState(null);
    const[className,setClassName]=useState("answer")
    useEffect(()=>{
        setQuestion(data[questionNumber-1]);
    },[data,questionNumber]);
    const  delay=(duration,callback)=>{
              setTimeout(()=>{
                callback();
              },duration)
    }
    
    let handleClick=(a)=>{
               setSelectanswer(a)
               setClassName("answer active")
               delay(3000, ()=>
               setClassName(a.correct ? "answer correct":"answer wrong")
               );
               delay(6000, ()=>{
                if(a.correct){
                          setQuestionNumber((prev)=>prev+1)
                    setSelectanswer(null)
               }else{
                setStop(true)
               }
            });
               
    }
    return ( 
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
               {question?.answers.map((a)=>(
                <div className={selectAnswer===a ? className:"answer"}onClick={()=>handleClick(a)}>{a.text}</div>
               ))}
            </div>
        </div>
     );
}
 
export default Trivia;