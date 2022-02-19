import React from "react";

function Button({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: any;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
