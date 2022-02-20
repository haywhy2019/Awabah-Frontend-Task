import React from "react";

function SelectInput({
  label,
  options,
  onChange,
  value,
}: {
  label: string;
  options: Array<Object>;
  onChange: any;
  className?: string;
  value?: any;
}) {
  return (
    <div className="mb-4 col-12 px-5">
      <label className="form-label text-white">{label}</label>

      <select
        className="form-select form-select-lg mb-3"
        onChange={onChange}
        value={value}
      >
        <option>---select---</option>
        {options.map((x: any, index: number) => (
          <option value={x.value} key={index}>
            {x.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
