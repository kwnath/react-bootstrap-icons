import React from 'react';
import PropTypes from 'prop-types';

const Eject = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M7.27 1.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H1.656C.78 9.5.326 8.455.926 7.816L7.27 1.047zM14.346 8.5L8 1.731 1.654 8.5h12.692zM.5 11.5a1 1 0 011-1h13a1 1 0 011 1v1a1 1 0 01-1 1h-13a1 1 0 01-1-1v-1zm14 0h-13v1h13v-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Eject.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eject.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Eject;