interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button 
      {...props}
    >

      {/** Button content */}
      {children}
      
    </button>
  );
};

export default Button;