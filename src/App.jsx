import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Career from './pages/Career'
import Education from './pages/Education'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
