import React from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disable?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  errors,
  id,
  label,
  register,
  disable,
  required,
}) => {
  return (
    <div className="form-control">
      <label className="label" htmlFor={id}>
      <span className="label-text">{label}</span>
      </label>
      <input
        {...register(id, { required })}
        autoComplete={id}
        type={type}
        id={id}
        disabled={disable}
        className={clsx(
          `input input-bordered `,
          errors[id] && "focus:ring-rose-500",
          disable && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};

export default Input;
