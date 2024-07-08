import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import PropTypes from 'prop-types';

function ToolTipComponent({
  title = 'Hey, Whats Up?...Hello',
  placement = 'top',
  tooltipstyles = 'tooltip-primary',
  children,
}) {
  const tooltipRef = useRef(null);
  useEffect(() => {
    const tooltip = new Tooltip(tooltipRef.current, {
      title: title,
      placement: placement,
      customClass: tooltipstyles,
    });

    return () => {
      tooltip.dispose();
      console.log('tooltip fired.');
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

export default ToolTipComponent;
