import './quizmain.css'
import { Link } from 'react-router-dom';
const QuizeMain = () => {
    return ( 
        <div className="quixxmain">
            
              <button><Link className='Link' to='/login'>Quiz-Time</Link></button>
        
        </div>
     );
}
 
export default QuizeMain;