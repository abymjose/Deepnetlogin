import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
const Header=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to ="/" class="nav-link active">Home</Link>
            </li>
            <li class="nav-item">
            <Link to ="Login" class="nav-link active">Login</Link> 
            </li>
            <li class="nav-item">
            <Link to ="Register" class="nav-link active">Register</Link>
            </li>
            <li class="nav-item">
            <Link to ="Product" class="nav-link active">Add Product</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Header;