const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/chetannada/" target="_blank">
          sayali bankar
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Movie<span>Villa</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;