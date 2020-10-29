import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkSpreadsheetFill = forwardRef(
  ({ color, size, ...rest }, ref) => {
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
          d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM3 9v1h2v2H3v1h2v2h1v-2h3v2h1v-2h3v-1h-3v-2h3V9H3zm3 3v-2h3v2H6z"
        />
      </svg>
    );
  },
);

FileEarmarkSpreadsheetFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkSpreadsheetFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkSpreadsheetFill;
