import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButton({variant,label,onClick,}) {
  return (
      <Button variant={variant} onClick={onClick}>{label}</Button>
  );
}