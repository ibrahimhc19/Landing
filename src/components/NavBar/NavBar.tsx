import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <div className="container">
        <p className="logo">ProgramaYa!</p>
        <nav>
          <a href="#somos-proya">Quienes Somos</a>
          <a href="#nuestros-programas">Nuestros Programas</a>
          <a href="#caracteristicas">Características</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
