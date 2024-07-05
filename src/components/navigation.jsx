import { Link } from 'react-router-dom';
import ToolTipComponent from './ToolTips';

export default function NavigationBar() {
  return (
    <header>
      <div className="row flex-row flex-wrap align-items-center mx-0 mb-0 vb-page-header-start-bar">
        <div className="col-8">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item active" aria-current="page">
                vanessab.exe
              </li>
            </ol>
          </nav>
        </div>
        <nav className="navbar col-4 d-flex flex-row justify-content-end">
          <ToolTipComponent
            title="Navigation"
            placement="top"
            tooltipstyles="tooltip-secondary"
          >
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#vb-nav-toggle-links"
                aria-controls="vb-nav-toggle-links"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="mx-1 vb-page-header-start-bar-btns"></div>
                <div className="mx-1 vb-page-header-start-bar-btns"></div>
                <div className="mx-1 vb-page-header-start-bar-btns"></div>
              </button>
            </div>
          </ToolTipComponent>

          <div className="collapse navbar-collapse" id="vb-nav-toggle-links">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  data-link="home"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/portfolio"
                  data-link="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume" data-link="resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" data-link="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
