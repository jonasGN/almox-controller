import type { Icons } from "@Types/icons";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

type IconSize = "default" | "small" | "big";
type IconType = "none" | "highlight" | "danger";

type IconSrc = typeof import("*.svg") | null;

// interface IconProps extends SVGProps<SVGSVGElement> {
interface IconProps {
  name: Icons;
  size?: IconSize;
  type?: IconType;
}

export const Icon = (props: IconProps): JSX.Element | null => {
  const { name, size, type, ...rest } = props;

  const [iconModule, setIconModule] = useState<IconSrc>(null);

  useEffect(() => {
    // use dynamic import to get the icon as a module
    import(`/public/icons/${name}.svg`)
      .then((module) => setIconModule(module))
      .catch((err) => console.error(`Icon '${name}' not found\nWith the error: ${err}`));
  }, [name]);

  if (!iconModule) return null;

  let iconSize = 24;
  switch (size) {
    case "small":
      iconSize = 20;
      break;
    case "big":
      iconSize = 48;
      break;
  }

  let typeClassName = "";
  switch (type) {
    case "highlight":
      typeClassName = styles.highlight;
      break;
    case "danger":
      typeClassName = styles.danger;
      break;
  }

  // same as: import { ReactComponent as Icon } from "./path/to/icon.svg"
  const IconComponent = iconModule.ReactComponent;

  return <IconComponent width={iconSize} height={iconSize} className={typeClassName} />;
};
