// eslint-disable-next-line react/prop-types
function Button({ onClick, disabled, children, className, type = "default" }) {
  let classes = `${className}`;
  if (type === "gradient") {
    classes +=
      " text-lg font-semibold text-white px-8 py-4 rounded-lg transition disabled:cursor-not-allowed disabled:bg-gray-300 disabled:bg-gradient-to-r disabled:from-secondary-200 disabled:to-tertiary-200 bg-gradient-to-r from-secondary-500 to-tertiary-500 ";
  } else if (type === "default") {
    classes +=
      " px-4 py-2 rounded-full text-white bg-secondary-500 hover:bg-secondary-700 hover:cursor-pointer disabled:cursor-not-allowed ";
  }
  return (
    <button onClick={onClick} disabled={disabled} className={`${classes}`}>
      {children}
    </button>
  );
}

export default Button;
