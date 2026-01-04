
function Portfolio() {

  return (
    <div id="portfolio" className="section-container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-offset-2 card">
          <h3>Technology</h3>
        </div>
        <div className="col-md-4 card">
          <h3>Regulatory and Compliance</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-offset-2 card">
          <h3>Life Sciences</h3>
        </div>
        <div className="col-md-4 card">
          <h3>Creative Nonfiction</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
