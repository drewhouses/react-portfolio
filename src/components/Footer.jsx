// import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    // <>
    //   <ul className="footer footer-links">
    //     <li className="footer-item">
    //       {" "}
    //       <a
    //         href="https://twitter.com/drewhousess"
    //         className="fa fa-twitter footer-icons"
    //       ></a>
    //     </li>
    //     <li className="footer-item">Link 2</li>
    //     <li className="footer-item">Link 3</li>
    //   </ul>
    // </>

    <div className="contact-me">
      <a
        href="https://twitter.com/drewhousess"
        className="fa fa-twitter footer-icons"
      ></a>
      <a href="https://github.com/drewhouses">
        <i className="fa fa-github footer-icons"></i>
      </a>
      {/* <a href="https://www.linkedin.com/in/drew-casas-1b38b4a4/">
        
      </a> */}
    </div>
  );
}

export default Footer;
