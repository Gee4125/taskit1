


const Button = ({ type, label, className, onClick }) => {
  return (
    <button
      type={type}
      className={`rounded-full px-4 py-2 ${className}`} // Added padding and rounded class
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;



