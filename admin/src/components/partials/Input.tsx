import { ReactNode } from "react";
import { cn } from "../cn";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
    className?: string;
}

export const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      className={cn("text-sm font-semibold tracking-wide", className)}
      {...props}
    >
      {children}
    </label>
  );
};

interface UploadFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  accept: string;
}

export const UploadFile: React.FC<UploadFileProps> = ({ accept, ...props }) => {
  return (
    <input
      type="file"
      accept={accept}
      {...props}
    />
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  rows: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ name, value, rows, onChange, ...props }) => {
  return (
    <textarea
      name={name}
      value={value}
      rows={rows}
      onChange={onChange}
      {...props}
    />
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value: string | number;
  className?: string;

    // Event handlers
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, type, value, className, onChange, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      className={cn("border px-4 py-1 border-gray-500 rounded-md max-w-lg", className)}
      value={value}
      {...props}
    />
  );
};

export default Input;