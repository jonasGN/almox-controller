interface SelectOptionProps {
  value: any;
  title: string;
}

export const SelectOption = (props: SelectOptionProps): JSX.Element => {
  const { value, title } = props;

  return <option value={value}>{title}</option>;
};
