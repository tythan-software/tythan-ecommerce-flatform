import { ReactNode } from "react";

interface LabelProps {
    htmlFor: string;
    className?: string;
    children: ReactNode;
}

export const Label = (props: LabelProps) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className={`text-sm font-semibold tracking-wide ${props.className}`}
    >
      {props.children}
    </label>
  );
};

interface InputProps {
    id: string;
    name: string;
    type: string;
    placeholder?: string;
    className?: string;
    value: string | number;
    disabled: boolean;
    required: boolean;

    // Event handlers
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      className={`border px-4 py-1 border-gray-500 rounded-md max-w-lg ${props.className}`}
      value={props.value}
      disabled={props.disabled}
      required={props.required}
    />
  );
};

export default Input;