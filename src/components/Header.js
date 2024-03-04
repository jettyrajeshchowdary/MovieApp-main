import Movielogo from "../images/img1.jpg";
import "/index.css"

const Title = () => (
   
    <a href="/">
      <img className="logo" src={Movielogo} alt="Food Fire Logo" />
    </a>
  );

const Header=()=>{
    return(
        <>
        <div className="header">
            <Title/>
            <h2 id="logoname">Movie Villa</h2>
            <ul className="nav-item">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
        </>
    )
}

export default Header;