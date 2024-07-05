// pages/portfolio.jsx
import { PortfolioItem } from '../components';

export default function Portfolio() {
  return (
    <div id="content">
      <div className="row d-flex align-items-center p-3">
        <div className="col-lg-6">
          <h1 className="vb-page-heading vb-call-out-color">Portfolio</h1>
        </div>
      </div>
      <div className="col-10 col-sm-8 col-lg-6 vb-page-header-image">
        <PortfolioItem />
      </div>
    </div>
  );
}
