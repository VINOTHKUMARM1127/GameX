
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DetailsPage from "./Components/DetailsPage"

function App() {
  

  return (
    <Router>

      <div className=" bg-slate-600 min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}

export default App
