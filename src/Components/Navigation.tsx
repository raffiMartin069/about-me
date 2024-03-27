import logo from "../assets/Logo.png";

export function Logo() {
  return <img className="img-fluid display-6" src={logo} alt="logo" />;
}

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div>
          <Logo />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <h5>Home</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h5>Projects</h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <h5>Skills</h5>
              </a>
            </li>
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
