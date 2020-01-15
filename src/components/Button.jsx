import React from 'react';
import { operators, specialOperators } from '../utils/constants'
export default ({ onButtonClick, buttonKey}) => {
  
  let classNames = [
    'btn',
    operators.includes(buttonKey) ? 'btn-pink' : '',
    specialOperators.includes(buttonKey) ? 'btn-teal' : '',
    buttonKey === '0' ? 'btn-zero': ''
  ];
  
  let handleClick = (e) => { onButtonClick(e.target.textContent) }

  return (
    <button
      name={buttonKey}
      className={ classNames.join(' ').trim()}
      onClick={handleClick}
    >
      { buttonKey }
    </button>
  );
}