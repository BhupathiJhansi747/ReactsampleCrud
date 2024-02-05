import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="text-decoration-none navbar-brand" to={"/"}>Home</Link>
      </li>
      <li className="nav-item mx-3">
        <Link  className="text-decoration-none navbar-brand" to={"/add"}>Add</Link>
      </li>
      
    </ul>
  </div>
</nav>
        </>
     );
}
 
export default Header;