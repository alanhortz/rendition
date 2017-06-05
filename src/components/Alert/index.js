import React from 'react';
import { Alert } from 'reactstrap';
import classNames from 'classnames';

const CustomizeAlert = ({ inverse, color, className, size, ...props }) => (
  <Alert
    className={
      classNames({ [`bg-${color}`]: inverse, 'text-white': inverse, 'border-0': inverse, [`alert-${size}`]: size }, className)
    }
    color={color}
    {...props}
  />
);

export default CustomizeAlert;