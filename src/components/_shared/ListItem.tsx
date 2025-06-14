interface ListItemProps {
  itemName: string,
  className: string,
}

const ListItem = (
  { 
    itemName, 
    className 
  }
  : ListItemProps) => {
  return <li className={className}>{itemName}</li>;
};

export default ListItem;