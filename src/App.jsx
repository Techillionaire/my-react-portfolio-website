import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
