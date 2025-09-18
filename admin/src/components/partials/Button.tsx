interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
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