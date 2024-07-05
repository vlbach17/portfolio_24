import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import PropTypes from 'prop-types';

const TypedText = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [strings]);

  return (
    <div className="typed-strings-container">
      <span id="typed-strings" ref={typedRef}></span>
    </div>
  );
};

TypedText.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypedText;
