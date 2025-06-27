import Action from "./components/Action/Action";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import type { IHeaderProps } from "./types/types";

{/* <a href="#somos-proya">Quienes Somos</a>
          <a href="#nuestros-programas">Nuestros Programas</a>
          <a href="#caracteristicas">Características</a> */}

const enlaces:IHeaderProps = {
  title: "ProgramaYa!",
  links: [
    { linkTitle: 'Inicio', linkRef: '/' },
    { linkTitle: 'Acerca de', linkRef: '/about' },
    { linkTitle: 'Contacto', linkRef: '/contact' }
  ]
}


function App() {
  return (
    <>
      {/* <BrowserRouter basename="/Landing">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagina" element={<Pagina />} />
        </Routes>
      </BrowserRouter> */}
      <Header {...enlaces}/>
      <Hero />
      <Action />
      <Welcome />
      <Main />
      <Action />
      <Footer />
    </>
  );
}

export default App;
