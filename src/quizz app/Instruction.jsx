import { Link } from "react-router-dom";
import './instruction.css'
const Instruction = () => {
    return ( 
        <div className="instruction_image">
        <div className="instruction_page">
        <h1>Read Instructions Carefully before Starting The Test....</h1>
            <ol type="1">
             
             <li>In that test there are 15 question.</li>
             <li>each question you have 30sec to answer.</li>
             <li>each question can carry some amount.</li>
             <li>if you not answer any question you get Zero amount.</li>
             <li>The amount structure will be pyramidic in structure.</li>
             <li> Each question carry differnt amount structure.</li>
             <li>if you go high you will get more money.</li>
             <li>do well and dont use other browser when you start the test.</li>
             </ol>  
        </div>
        <div className="Inst_but">
          <button><Link className="link" to='/quize'> Get Started</Link></button>
        </div>
        </div>
     );
}
 
export default Instruction;