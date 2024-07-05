import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import PropTypes from 'prop-types';

function ToolTipComponent({ title, placement, tooltipstyles, children }) {
  const tooltipRef = useRef(null);
  useEffect(() => {
    const tooltip = new Tooltip(tooltipRef.current, {
      title: title,
      placement: placement,
      customClass: tooltipstyles,
    });

    return () => {
      tooltip.dispose();
    };
  }, [title, placement, tooltipstyles]);

  const childWithProps = React.cloneElement(children, {
    ref: tooltipRef,
    'data-bs-placement': placement,
    title: title,
    'data-bs-toggle': 'tooltip',
    className: tooltipstyles,
  });
  return childWithProps;
}

ToolTipComponent.propTypes = {
  title: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  tooltipstyles: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ToolTipComponent.defaultProps = {
  title: 'uh oh, are you lost?',
  placement: 'bottom',
  tooltipstyles: 'tooltip-styles',
};

export default ToolTipComponent;
