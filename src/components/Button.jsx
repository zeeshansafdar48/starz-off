/* eslint-disable react/prop-types */

import { BUTTON_TYPES } from "../constants";

function Button({ onClick, disabled, children, className, type = BUTTON_TYPES.DEFAULT }) {
  let classes = ``;
  if (type === BUTTON_TYPES.GRADIENT) {
    classes += ` text-lg rounded-full font-semibold text-white px-10 py-3 transition 
        disabled:cursor-not-allowed disabled:bg-gray-300 disabled:bg-gradient-to-r disabled:from-secondary-200 disabled:to-tertiary-200
        hover:bg-gradient-to-r hover:from-secondary-600 hover:to-tertiary-600
        bg-gradient-to-r from-secondary-500 to-tertiary-500 `;
  } else if (type === BUTTON_TYPES.DEFAULT) {
    classes +=
      " px-4 py-2 rounded-full text-white bg-secondary-500 hover:bg-secondary-700 hover:cursor-pointer disabled:cursor-not-allowed ";
  }
  classes += `${className}`;
  return (
    <button onClick={onClick} disabled={disabled} className={`${classes}`}>
      {children}
    </button>
  );
}

export default Button;
