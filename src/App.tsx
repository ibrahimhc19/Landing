import Action from "./components/Action/Action";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <>
      {/* <BrowserRouter basename="/Landing">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagina" element={<Pagina />} />
        </Routes>
      </BrowserRouter> */}
      <Header />
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
