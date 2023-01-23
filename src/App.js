
import './App.css';

//  import Navbar from './zee/navbar.jsx'
//  import Home from './zee/home';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
//  import TvShows from './zee/tvshows';
//  import Movies from './zee/movies';
//  import AddTvShows from './zee/addtvshowes';
//  import WebSeries from './zee/webSeries';
//  import News from './zee/news';
//  import AddMovies from './zee/addMovies';
//  import Addwebseries from './zee/addwebseries';
//  import Addnews from './zee/addnews';
//  import WebPortal from './zee/webPortal';

 import Quiz from './quizz app/quiz';
import Instruction from './quizz app/Instruction';
import QuizeMain from './quizz app/quizzmain';
import Login from './quizz app/qlogin';






function App() {
  return (
    <div className="app">
      {/* <BrowserRouter> 
          <Navbar/> 
            <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/tvshows'element={<TvShows/>}/>
             <Route path='/addtvshows'element={<AddTvShows/>}/>
             <Route path='/movies' element={<Movies/>}/>
             <Route path='/add-movies'element={<AddMovies/>}/> 
             <Route path='/add-webseries'element={<Addwebseries/>}/> 
              <Route path='/news' element={<News/>}/>
             <Route path='/add-news' element={<Addnews/>}/>
             <Route path='/webseries/*' element={<WebPortal/>}/>
             
             
           </Routes>
     </BrowserRouter> */}


                                           {/* quize */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<QuizeMain/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/instruction'element={<Instruction/>}/>
      <Route path="/quize" element={<Quiz/>}/>
     </Routes>
     </BrowserRouter>
   
            
              
    </div>
  );
}

export default App;
