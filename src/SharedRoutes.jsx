import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Services from "./Pages/Services/Services"




const SharedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/service/:id" element={<Services />} />
    </Routes>
  )
}

export default SharedRoutes