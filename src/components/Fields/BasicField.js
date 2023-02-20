import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicField({label,value,onChange,inputProps,size}) {
  return (
      <TextField 
        autoComplete = 'off' 
        id = "outlined-basic" 
        label = {label} 
        variant = "outlined"  
        value = {value} 
        InputProps={inputProps}
        onChange={(event) => onChange(event.target.value) }
        size = {size}
      />
  );
}
