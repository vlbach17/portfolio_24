// src/routes/HomePage.jsx
// import { Helmet } from 'react-helmet-async';
import TypedText from '../components/TypedText.jsx';
import { Link } from 'react-router-dom';
import fileFolderClosed from '../assets/images/files-03.png';
import fileFolderOpen from '../assets/images/files-02.png';

export default function HomePage() {
  return (
    <div id="content">
      <div className="row d-flex align-items-center p-3">
        <div className="col-lg-6 vb-page-header-content">
          {/* <Helmet>
            <title>Vanessa B. Kicka$$ Web Design</title>
            <meta
              name="description"
              content="Kickass Web Design and Development serving Indiana and surrounding areas."
            />
          </Helmet> */}
          {/* <!-- websites, digital experiences, first impressions, inclusive designs --> */}
          <h1 className="vb-page-heading">
            Designing
            <span className="vb-text-highlight py-0">Kickass</span>
            <TypedText
              strings={['websites', 'digital experiences', 'first impressions']}
            />
          </h1>
          <p className="lead pt-4">
            Because your online presence {"shouldn't"} suck.
          </p>
          <div className="d-grid gap-2 d-md-block justify-content-md-start vb-btn-wrapper my-4">
            <Link
              type="button"
              to="/portfolio"
              data-link="portfolio"
              className="btn btn-primary m-1"
            >
              Portfolio
            </Link>
            <Link
              type="button"
              to="/resume"
              data-link="resume"
              className="btn btn-outline-primary m-1"
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="col-10 col-sm-8 col-lg-6 vb-page-header-sidebar">
          <div className="row px-0">
            <div className="col-12 p-1">
              <img
                src={fileFolderClosed}
                alt="closed-file-folder-portfolio"
                className="vb-page-header-img"
              />
            </div>
            <div className="col-12 p-1">
              <img
                src={fileFolderClosed}
                alt="closed-file-folder-portfolio"
                className="vb-page-header-img"
              />
            </div>
            <div className="col-12 p-1">
              <img
                src={fileFolderClosed}
                alt="closed-file-folder-portfolio"
                className="vb-page-header-img"
              />
            </div>
            <div className="col-12 p-1">
              <img
                src={fileFolderClosed}
                alt="closed-file-folder-portfolio"
                className="vb-page-header-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
