import React from 'react';

function Button({className , text, onclick}) {
    return (  
          <button className={className} onClick={onclick} >{text}
          </button>
    );
}

export default Button;