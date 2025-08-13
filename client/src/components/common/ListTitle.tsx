interface ListTitleProps {
  className: string,
  text: string,
}

export const ListTitle = (
  { 
    className, 
    text
  }
  : ListTitleProps) => {
  return <h3 className={className}>{text}</h3>
};

export default ListTitle;