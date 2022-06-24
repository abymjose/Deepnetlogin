
import './App.css';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
  <Router>
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
