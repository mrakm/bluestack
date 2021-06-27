import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import TabManager from './components/TabManager';
function App() {
  return (
    <div className="HomeScreen">      
      <NavBar />       
      <div className ="InnerContent">
        <Title /> 
        <TabManager />
      </div>       
    </div>
  );
}

export default App;
