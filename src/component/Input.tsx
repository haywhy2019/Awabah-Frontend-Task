import React from "react";

function Input({
  label,
  className,
  onChange,
  type,
  labelFor,
  placeholder,
  value,
}: {
  label?: string;
  className?: string;
  onChange: any;
  type: string;
  labelFor?: string;
  placeholder?: string;
  value?: any;
}) {
  return (
    <div className="mb-4 col-12  px-5">
      <label
        htmlFor={labelFor}
        className={`form-label text-white ${className}`}
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={labelFor}
        value={value}
        onChange={onChange}
        min={type == "number" ? 1 : undefined}
        placeholder={placeholder}
      

      />
    </div>
  );
}

export default Input;
