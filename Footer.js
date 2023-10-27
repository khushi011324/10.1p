import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="">
      <div className="footer">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
           
          </ul>
        </div>
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <div className = "footer-icons">
           <img src = "data:image/png;base64,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" style={{ width: '100px' , height: '100px'}}/>
           <img src = "data:image/png;base64,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"style={{ width: '100px' , height: '100px'}}/>
           
        </div>
        </div>
      </div>
      <div className="footer-center">
        <h2>Dev@Deakin  in 2024</h2>
        <ul>
          <li>Privacy Policy</li>
        <li>Code of Conduct</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
