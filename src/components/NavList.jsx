import { Link } from "react-router-dom";

export default function NavList() {

  return(
    <nav>
      <ul>
        <li><Link to="/">Magic Color XXL</Link></li>
        <li><Link to="/curious-kaleidoscope">Curious Kaleidoscope</Link></li>
        <li><Link to="/system-overload-solution">System Overload Solution</Link></li>
        <li><Link to="/asdf">404</Link></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </nav>
  )
}