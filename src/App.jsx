import Home from "./pages/Home"
import RoomDetails from "./pages/RoomDetails"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About"
import RoomList from "./pages/RoomList"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<RoomList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
