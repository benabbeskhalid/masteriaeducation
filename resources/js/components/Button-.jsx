import React from 'react';

function Button(props) {
   const {onClick, children}=props;
  return (
    <button onClick={onClick} style={{backgroundColor: 'blue'}}>
      {children}
    </button>
  );
}

export default Button;
