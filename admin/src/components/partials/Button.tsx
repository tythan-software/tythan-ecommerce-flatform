interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: string | React.ReactNode;
  disabled?: boolean;

  // Event handlers
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button 
      className={props.className} 
      type={props.type} 
      onClick={props.onClick}
      disabled={props.disabled}
    >

      {/** Button content */}
      {props.children}
      
    </button>
  );
};

export default Button;