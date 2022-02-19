import React from 'react'

function Input ({label, className, onChange, type, labelFor, placeholder}: {label: string; className?: string; onChange: any; type: string; labelFor?: string; placeholder?: string}) {
  return (
    <div className="mb-4 col-12  px-5">
    <label htmlFor={labelFor} className={`form-label text-white ${className}`}>
      {label}
    </label>
    <input
      type={type}
      className="form-control"
      id={labelFor}
      onChange={onChange}
      min={type == "number" ? 1 : undefined}
      
      placeholder={placeholder}
    />
    
  </div>
  )
}

export default Input