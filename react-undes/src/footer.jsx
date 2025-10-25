import { Fragment } from "react";
import "./footer.css";

export const Footer = () => {
  return <Fragment>
      <footer class="footer">
        {/* <h1>Build Reusable React footer</h1> */}
        <br />
        <div class="footer-section">
          <ul>
            <li>
              <a href="#">Fitness Dashboard</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Watch Videos</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <p>© 2024 Fitness Dashboard. All Rights Reserved.</p>
        <div class="footer-icons">
          <a href="#">🎮</a>
          <a href="#">🐦</a>
          <a href="#">💻</a>
          <a href="#">🏀</a>
        </div>
      </footer>
    </Fragment>
};
