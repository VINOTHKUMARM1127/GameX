
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DetailsPage from "./Components/DetailsPage"
import Store from "./Pages/Store"
import Creator from "./Pages/Creator"
import Aboutus from "./Pages/Aboutus"

function App() {
  

  return (
    <Router>

      <div className=" bg-[#082751] min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<DetailsPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}

export default App
