const Label = ({ htmlFor, value }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 text-start"
    >
      {value}
    </label>
  );
};

export default Label;
