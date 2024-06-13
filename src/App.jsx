import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import SharedRoutes from "./SharedRoutes"

const App = () => {
  return (
    <div >
      <Navbar />
      <SharedRoutes />
      <Footer />
    </div>
  )
}

export default App