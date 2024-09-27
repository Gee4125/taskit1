

const Textbox = ({ type, label, placeholder, register, error }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`border rounded-full px-4 py-2 ${error ? 'border-red-500' : 'border-gray-300'}`} // Conditional border color based on error
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Textbox;

