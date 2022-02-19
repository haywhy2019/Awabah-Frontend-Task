import React from "react";

function SelectInput({ label, options, onChange, className }: { label: string; options: Array<Object>; onChange: any; className?: string }) {
  return (
    <div className="mb-4 col-12 px-5">
      <label className="form-label text-white">{label}</label>
      <select  className="form-select form-select-lg mb-3" onChange={onChange}>
        {options.map((x: any) => (
          <option value={x.value}>{x.name}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
