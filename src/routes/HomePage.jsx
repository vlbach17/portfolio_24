// src/routes/HomePage.jsx
import TypedText from '../components/TypedText.jsx';
import {
  fileFolderClosed,
  fileFolderOpen,
  pdfClosed,
  pdfOpened,
  contactIconOpen,
  contactIconClosed,
  clickedNoImg,
  defaultNoImg,
} from '../assets/images/icons/';
import IconImg from '../components/utilities/IconImg.jsx';
import { Fragment } from 'react';

export default function HomePage() {
  return (
    <Fragment>
      <div id="content" className="row d-flex align-items-center py-3 px-md-1">
        <div className="col-lg-6 vb-page-header-content">
          <h1 className="vb-page-heading">
            Designing
            <span className="vb-text-highlight py-0">Kickass</span>
            <TypedText
              strings={['websites', 'digital experiences', 'first impressions']}
            />
          </h1>
          <div className="row">
            <p className="lead pt-4">
              Because your online presence {"shouldn't"} suck.
            </p>
            <div className="d-grid gap-2 d-md-block justify-content-md-start vb-btn-wrapper my-4">
              <div className="col-10 col-sm-8 col-lg-6 vb-page-header-sidebar pxr-0 m-3">
                <div className="row px-0">
                  <div className="col-sm-6 col-md-2 p-1">
                    {/* ADD LINK HERE
                    PASSES PROP {to, data-link, className, imgInitialState, ImgClickedState} TO
                    IconImgComponenent PASSES PROP defaultImg, clickedImg to Icon
                    COmponent
                                          to="home"
                      type="a"
                      data-link="home"
                      className="icon-btn"
                     */}

                    <IconImg
                      iconClickedPath={fileFolderOpen}
                      iconDefaultPath={fileFolderClosed}
                      linkName="Portfolio"
                      linkUrl="/portfolio"
                    ></IconImg>
                  </div>
                  <div className="col-sm-6 col-md-2 p-1">
                    <IconImg
                      iconClickedPath={pdfOpened}
                      iconDefaultPath={pdfClosed}
                      linkName="Resume"
                      linkUrl="/resume"
                    ></IconImg>
                  </div>
                  <div className="col-sm-6 col-md-2 p-1">
                    <IconImg
                      iconClickedPath={clickedNoImg}
                      iconDefaultPath={defaultNoImg}
                      linkName="About"
                      linkUrl="/NotFound"
                    ></IconImg>
                  </div>
                  <div className="col-sm-6 col-md-2 p-1">
                    <IconImg
                      iconClickedPath={contactIconOpen}
                      iconDefaultPath={contactIconClosed}
                      linkName="Contact"
                      linkUrl="/contact"
                    ></IconImg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
