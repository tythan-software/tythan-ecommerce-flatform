interface ListItemProps {
  itemName: string,
  className: string,
}

export const ListItem = (
  { 
    itemName, 
    className 
  }
  : ListItemProps) => {
  return <li className={className}>{itemName}</li>;
};

export default ListItem;