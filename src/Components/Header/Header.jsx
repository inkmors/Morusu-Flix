import "./Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="container-header">
        <div className="logo-align">

            <Link className="align-text" to="/home">
                <h1>MORUSU</h1>
                <h1>FLIX</h1>
            </Link>
        </div>
        {/* <Link className="favorites" to="/favorites"><p>Ação</p></Link>
        <Link className="favorites" to="/favorites"><p>Comédia</p></Link>
        <Link className="favorites" to="/favorites"><p>Suspense</p></Link>
        <Link className="favorites" to="/favorites"><p>Em cartaz</p></Link> */}

        <Link className="favorites" to="/favorites"><p>Favoritos</p></Link>
      </div>
    );
  }
  
  export default Header;