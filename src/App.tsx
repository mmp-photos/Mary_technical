import '../public/styles/sitewide.css'
// import Purdue from './Purdue'
// import Services from './Services'
import Intro from './Intro'
import About from './AboutMary'
import Editing from './Editing'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Nav from './Nav'
import Footer from './Footer'

function App() {

  return (
    <>
      {Intro()}
      {/* {Services()} */}
      {About()}
      {Portfolio()}
      {Experience()}
      {Editing()}
      {/* {Purdue()} */}
      {Footer()}
      {Nav()}
    </>
  )
}

export default App
