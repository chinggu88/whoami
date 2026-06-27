import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Career from './pages/Career'
import Education from './pages/Education'
import Projects from './pages/Projects'
import About from './pages/About'
// 아래 두 페이지는 네비게이션에 노출하지 않고 URL(#/support, #/privacy)로만 접근
import Support from './pages/Support'
import Privacy from './pages/Privacy'

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
          {/* URL 직접 접근 전용 (앱 스토어 계정용) — Header 탭에는 추가하지 않음 */}
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
