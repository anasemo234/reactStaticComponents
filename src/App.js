import logo from './logo.svg';
import Sidebar from './components.js/Sidebar';
import Review from './components.js/Reviews';
import Analysis from './components.js/Sentiment';
import Rating from './components.js/AverageRating';
import Visitors from './components.js/WebsiteVisitors';
import "./styles.css"
import './App.css';


function App() {
  return (
    <div className='App'>
      <Sidebar/>
      <Review/>
      <Rating/>
      <Analysis/>
      <Visitors/>
    
    </div>
  );
}

export default App;
