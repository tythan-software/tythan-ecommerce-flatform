interface ListTitleProps {
  className: string,
  title: string,
}

export const ListTitle = (
  { 
    className, 
    title
  }
  : ListTitleProps) => {
  return <h3 className={className}>{title}</h3>
};