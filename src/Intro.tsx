import { scrollToSection } from './assets/utilities/buttons'

function Intro() {

  return (
    <>
    <div className="section-container" id="home">
        <div className="row" id="home">
          <div className="col-md-6 col-md-offset-3">
            <h1>Technical Writing &amp; Science Editing</h1>
          </div>
        </div>
      <div className="row" id="home">
        <div className="col-md-3 col-md-offset-3">
          {/* <h2>Technical Writing</h2>
          <h2>&nbsp; &amp; Science Editing</h2> */}
          <blockquote>Mary Beth Karty eliminates ambiguity.<br /><br />
          When the difference between Median and Mean could be the difference between life and death never settle for "Average."</blockquote>
          <button className="custom-btn btn-2 mr-2r mt-2r" onClick={() => scrollToSection("portfolio")}>Portfolio</button>
          <button className="custom-btn btn-2" onClick={() => scrollToSection("about")}>About</button>
        </div>
        <div className="col-md-3">
          <img className="inline-image image-border image-drop-shadow" src="images/about_mary.jpg" alt="Mary in a white blouse and red head scarf looking over a table full of books" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Intro
