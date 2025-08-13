interface ButtonProps {
  className?: string;
  text: string;
}

export const Button = ({ className, text }: ButtonProps) => {
  return (
    <button className={className}>
      {text}
    </button>
  );
};

export default Button;