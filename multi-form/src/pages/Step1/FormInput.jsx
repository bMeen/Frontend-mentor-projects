import Error from "../../ui/Error";

function FormInput({ children, label, error }) {
  return (
    <li>
      <div className="mb-0.5 flex justify-between">
        <label
          htmlFor={children.props.id}
          className="font-medium text-marine-blue"
        >
          {label}
        </label>
        {error && <Error>{error}</Error>}
      </div>
      {children}
    </li>
  );
}

export default FormInput;
