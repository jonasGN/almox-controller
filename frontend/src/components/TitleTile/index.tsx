import React from "react";

import styles from "./styles.module.scss";

interface TitleTileProps {
  title: string;
  tagElement?: "h1" | "h2";
  useElementPadding?: boolean;
}

export function TitleTile({ title, tagElement, ...props }: TitleTileProps) {
  const paddingClass = props.useElementPadding ? styles.padding : "";

  const attributes = { className: `${styles.title} ${paddingClass}` };
  const tag = tagElement ?? "h2";
  const element = React.createElement(tag, attributes, title);

  return element;
}
