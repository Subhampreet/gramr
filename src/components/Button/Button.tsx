import React from 'react';

interface ButtonProps{
    label: string;
}

function Button(ButtonProps) {
  return (
    <button>{ButtonProps.label}</button>
  )
}

export default Button