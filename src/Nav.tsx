import { scrollToSection } from './assets/utilities/buttons'

function Nav() {

  return (
    <nav>
        <a href="#home"><img className="main-logo" onClick={() => scrollToSection("intro")} src="public/images/mk_logo_reverse.png" alt="Mary Beth Karty Logo - a cursive M with a sans K"/></a>
        <h1>Mary Beth Karty</h1>
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#ai">AI and Editing</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
    </nav>
  )
}

export default Nav
