import React from 'react';

interface ButtonProps{
    label: string;
}

function Button(ButtonProps: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <button>{ButtonProps.label}</button>
  )
}

export default Button