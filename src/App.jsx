import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DetailsPage from "./Pages/DetailsPage"
import Store from "./Pages/Store"
import Creator from "./Pages/Creator"
import Aboutus from "./Pages/Aboutus"
import NotFoundPage from "./Pages/NotFoundPage"
import CreatorDetails from "./Pages/CreatorDetails"
import ScrollTop from "./Components/ScrollTop"

function App() {

  return (
    <Router>
      <ScrollTop />
      <div className=" bg-[var(--sbg-color)] min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<DetailsPage />} />
          <Route path="/creators/:id" element={<CreatorDetails />} />
          <Route path="/:id" element={<NotFoundPage />} />
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
