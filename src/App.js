import './App.scss';
import Header from './components/Header';
import {Routes,Link,Route, BrowserRouter}  from "react-router-dom";
function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
