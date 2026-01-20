
function Portfolio() {

  return (
    <div id="portfolio" className="section-container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-offset-2 card pr-2r">
          <h3>Software Documentation</h3>
            <ul>
              <li><a target="new" href="public/images/Proactive_User_Guide.pdf">SysTrack DEX Pack User Guide</a></li>
              <li><a target="new" href="public/images/port01.pdf">Dex Pack: Vulnerability</a></li>
              <li><a target="new" href="public/images/AVD_User_Guide.pdf">AVD Assessment and Management</a></li>
            </ul>
        </div>
        <div className="col-md-4 card">
          <h3>Research and White Papers</h3>
            <ul>
              <li><a target="new" href="public/images/Proactive_User_Guide.pdf">Example #1</a></li>
              <li><a target="new" href="public/images/port01.pdf">Example #2</a></li>
              <li><a target="new" href="public/images/AVD_User_Guide.pdf">Example #3</a></li>
            </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-offset-2 card">
          <h3>Online Content</h3>
            <ul>
              <li><a target="new" href="public/images/Proactive_User_Guide.pdf">Example #1</a></li>
              <li><a target="new" href="public/images/port01.pdf">Example #2</a></li>
              <li><a target="new" href="public/images/AVD_User_Guide.pdf">Example #3</a></li>
            </ul>          
        </div>
        <div className="col-md-4 card">
          <h3>Creative Work</h3>
            <ul>
              <li><a target="new" href="public/images/Proactive_User_Guide.pdf">Example #1</a></li>
              <li><a target="new" href="public/images/port01.pdf">Example #2</a></li>
              <li><a target="new" href="public/images/AVD_User_Guide.pdf">Example #3</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
