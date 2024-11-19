// File: /src/components/Element/Buttons/index.jsx
const Button = (props) => {
  const { children, color, type } = props;
  return (
    <button type={type} className={`btn btn-${color} rounded-0`}>
      {children}
    </button>
  );
};

export default Button; 