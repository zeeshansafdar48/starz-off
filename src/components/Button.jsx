// eslint-disable-next-line react/prop-types
function Button({ onClick, disabled, children, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} px-4 py-2 rounded-full text-white bg-secondary-500 hover:bg-secondary-700 hover:cursor-pointer disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}

export default Button;
