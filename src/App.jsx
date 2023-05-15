import Home from "./pages/Home"
import RoomDetails from "./pages/room/RoomDetails"
import RoomList from "./pages/room"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<RoomList />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
