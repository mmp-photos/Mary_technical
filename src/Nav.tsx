import { scrollToSection } from './assets/utilities/buttons'

function Nav() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        
        {/* Header: Logo and Hamburger Button */}
        <div className="navbar-header purple-nav">
          <button 
            type="button" 
            className="navbar-toggle collapsed" 
            data-toggle="collapse" 
            data-target="#myNavbar" 
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          
          <a className="navbar-brand" href="#home" onClick={() => scrollToSection("intro")}>
             <img 
               className="main-logo" 
               src="/images/mk_logo_reverse.png" 
               alt="Logo" 
             />
          </a>
          <span className="masthead">Mary Beth Karty</span>
        </div>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#ai">AI and Editing</a></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Nav;