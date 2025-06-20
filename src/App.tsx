import Accion from "./components/Accion/Accion"
import Caracteristicas from "./components/Caracterisiticas/Caracteristicas"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Presentacion from "./components/Presentacion/Presentacion"


function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <Accion/>
      <Presentacion/>
      <Caracteristicas/>
      <Accion/>
      <Footer/>
    </>
  )
}

export default App
