import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

import { PopupMenu } from "../PopupMenu";
import { OptionLineProps } from "../PopupMenu/OptionLine";

interface ItemsPopupMenuProps {
  isVisible: boolean;
}

export function ItemsPopupMenu({ isVisible }: ItemsPopupMenuProps) {
  const navigate = useNavigate();

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
      onClick: () => {
        navigate(routes.newItem);
      },
      warning: false,
    },
  ];

  return <PopupMenu options={options} isVisible={isVisible} />;
}
