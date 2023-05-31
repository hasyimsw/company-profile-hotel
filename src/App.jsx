import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import RoomList from "./pages/rooms"
import RoomDetails from "./pages/rooms/RoomDetails"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
