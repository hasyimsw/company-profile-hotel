import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import RoomDetails from "./pages/RoomDetails"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/room/:id',
      element: <RoomDetails />
    }
  ])

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
