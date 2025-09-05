interface PriceFormatProps extends React.HTMLAttributes<HTMLSpanElement> {
  amount: number;
}

const PriceFormat: React.FC<PriceFormatProps> = ({ amount, ...props}) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span {...props}>{formattedAmount}</span>;
};

export default PriceFormat;
