import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Portofolio</p>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">Home</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">About</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">Projects</a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
