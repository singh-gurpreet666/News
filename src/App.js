import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import India from './components/India';

function App() {
  let pagesize = 6
  let apikey = process.env.REACT_APP_NEWS_API_KEY
  
  return (
    <>
    <div className="container">

    </div>

    <Router>
       <NavBar />
       {/* <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}
        <Routes className="App">


        


          <Route path="/" element = {<News key ="home" category="general" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>
          {/* <Route path="/about" element ={<About />}></Route> */}
          <Route path="/general" element ={<News key ="general" category="general" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>
          <Route path="/business" element ={<News key ="business" category="business" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>
          <Route path="/entertainment" element ={<News key ="entertainment" category="entertainment" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>
          <Route path="/health" element ={<News key ="health" category="health" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>
          <Route path="/science" element ={<News key ="science" category="science" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>
          <Route path="/sports" element ={<News key ="sports" category="sports" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>
          <Route path="/technology" element ={<News key ="technology" category="technology" pageSize = {pagesize} country = "in" apikey={apikey} />}></Route>          
          <Route path="/india" element ={<India apikey={apikey}/>}></Route>          
        
        </Routes>
        </Router>


    </>
  );
}

export default App;
