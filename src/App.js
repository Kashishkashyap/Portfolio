import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Tech from "./pages/TechStack/tech";
import Project from "./pages/Projects/project";
import Education from "./pages/Education/Education";
import Work from "./pages/Work/Work";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>

      {/* <Layout />
      <div className="container ">
        <About />
        <Tech />
        <Project />
        <Education />
        <Work />
      </div> */}
      <div >
        <div><Layout /></div>
        <div style={{ backgroundColor: "#0b0c10" }}>
          <Home />
          <div className="container" >
            <About />
            <Tech />
            <Project />
            <Work />
            <Education />
            <Contact />
          </div>
          <Footer />
        </div>
        <ScrollToTop
          smooth
          color="#d60039"
          style={{ backgroundColor: "#16161d", borderRadius: "100px", boxShadow: "none" }}
        />
      </div>

    </>
  );
}

export default App;
