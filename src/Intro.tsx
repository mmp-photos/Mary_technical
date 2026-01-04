import { scrollToSection } from './assets/utilities/buttons'

function Intro() {

  return (
    <div className="row section-container" id="home">
      <div className="col-md-5 col-md-offset-2">
        <h2>Technical Writing</h2>
        <h2>&nbsp; &amp; Science Editing</h2>
        <p className="intro-text">Mary Karty eliminates ambiguity.</p>
        <p className="intro-text">When the difference between Median and Mean could be the difference between life and death never settle for "Average."</p>
        <button className="custom-btn btn-2" onClick={() => scrollToSection("portfolio")}>Portfolio</button>
        <button className="custom-btn btn-2" onClick={() => scrollToSection("about")}>About</button>
      </div>
      <div className="col-md-4">
        <img className="inline-image image-border image-drop-shadow" src="public/images/about_mary.jpg" alt="Mary in a white blouse and red head scarf looking over a table full of books" />
      </div>
    </div>
  )
}

export default Intro
