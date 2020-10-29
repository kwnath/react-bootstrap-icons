import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileExcelFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5.884 4.68a.5.5 0 1 0-.768.64L7.349 8l-2.233 2.68a.5.5 0 0 0 .768.64L8 8.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 8l2.233-2.68a.5.5 0 0 0-.768-.64L8 7.219l-2.116-2.54z"
      />
    </svg>
  );
});

FileExcelFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileExcelFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileExcelFill;
