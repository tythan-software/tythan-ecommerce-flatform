export default interface SettingsCategories {
  title: string;
  icon: JSX.Element;
  color: string;
  settings: Setting[];
}

export interface Setting {
  label: string; 
  value: string; 
  type: string;
}