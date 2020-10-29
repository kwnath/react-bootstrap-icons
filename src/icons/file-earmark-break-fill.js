import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkBreakFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V9H2V2zm0 10v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H2zm7.5-8.5v-2l3 3h-2a1 1 0 0 1-1-1zm-9.5 7a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
});

FileEarmarkBreakFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkBreakFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkBreakFill;
