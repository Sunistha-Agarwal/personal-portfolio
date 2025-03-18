
import './App.css'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App
