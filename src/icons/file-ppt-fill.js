import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FilePptFill = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.5 4.5a.5.5 0 0 0-1 0V12a.5.5 0 0 0 1 0V9.236a3 3 0 1 0 0-4.472V4.5zm0 2.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
      />
    </svg>
  );
});

FilePptFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FilePptFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FilePptFill;
