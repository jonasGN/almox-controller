import React from "react";

import styles from "./styles.module.scss";

interface TitleTileProps {
  title: string;
  tagElement?: "h1" | "h2" | "h3" | "h4";
  useElementPadding?: boolean;
}

export function TitleTile(props: TitleTileProps) {
  const { title, tagElement = "h2" } = props;
  const paddingClass = props.useElementPadding ? styles.padding : "";

  const attributes = { className: `${styles.title} ${paddingClass}` };
  const element = React.createElement(tagElement, attributes, title);

  return element;
}
