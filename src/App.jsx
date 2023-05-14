import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import RoomDetails from "./pages/RoomDetails"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About"
import RoomList from "./pages/RoomList"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/about',
  //     element: <About />
  //   },
  //   {
  //     path: '/rooms',
  //     element: <Home />
  //   },
  //   {
  //     path: '/room/:id',
  //     element: <RoomDetails />
  //   }
  // ])

  return (
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<RoomList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
