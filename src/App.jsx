import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Introduction from "./components/Introduction.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-950 min-h-screen">
        <Navbar />
        <main className="md:ml-65 pt-16 flex flex-col space-y-48">
          <div>
          <Introduction />
          </div>
          <div>
          <About />
          <Projects />
          <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
