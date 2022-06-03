import { PopupMenu } from "../PopupMenu";
import { OptionLineProps } from "../PopupMenu/OptionLine";

export function ItemsPopupMenu() {
  const options: OptionLineProps[] = [
    {
      title: "Catálogo",
      onClick: () => {},
      warning: false,
    },
    {
      title: "Solicitações",
      onClick: () => {},
      warning: false,
    },
    {
      title: "Adiciona novo item",
      onClick: () => {},
      warning: false,
    },
  ];

  return <PopupMenu options={options} isVisible={true} />;
}
