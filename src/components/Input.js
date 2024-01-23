const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="outline-none rounded-md w-full py-1 px-3 mb-3"
        {...props}
        // type={props.type}
        // id={props.id}
        // value={props.value}
        // onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
