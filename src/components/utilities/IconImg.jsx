// src/components/utilities/IconLink.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// function to change image onClick
// set icon state from default img to clicked img
// set to, data-name, title, class for modal link

function handleIconClick(isIconClicked, setIconState) {
  setIconState(!isIconClicked);
  // if true set iconClicked as img
  console.log('handleIconClick() fired');
}

// return object on click
function IconImg({ iconClickedPath, iconDefaultPath, linkName, linkUrl }) {
  event.stopPropagation();
  // on load iconImgState to false
  const [isIconClicked, setIconState] = useState(false);

  return (
    <div className="p-5 vb-icon-btn-wrapper">
      <Link to={linkUrl}>
        <img
          src={isIconClicked ? iconClickedPath : iconDefaultPath}
          alt="testing"
          className="vb-icon-btn"
          onClick={() => handleIconClick(isIconClicked, setIconState)}
          title={linkName}
        />
      </Link>
      <p className="vb-icon-btn-label">{linkName}</p>
    </div>
  );
}

IconImg.propTypes = {
  iconClickedPath: PropTypes.string.isRequired,
  iconDefaultPath: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default IconImg;
