import React, { useState } from "react";
import { ElementException } from "../../exceptions";
import { initialsOf } from "../../utils/formatters";
import { classNames } from "../../utils/styles-helper";

import { RawButton } from "../Buttons";
import { Image } from "../Image";

import styles from "./styles.module.scss";

interface AvatarProps {
  userName?: string;
  userImage?: string;
  size?: "default" | "small";
  radius?: "circle" | "square";
  onClick?: (e: React.MouseEvent) => void;
}

export const Avatar = (props: AvatarProps): JSX.Element => {
  const { userImage, userName, size, radius, onClick } = props;

  const [image, setImage] = useState(userImage ?? "");

  if (!userImage && !userName) {
    throw new ElementException("Must be given at least one of: userImage or userName");
  }

  const initials = userName && initialsOf(userName);

  const content = image ? (
    <Image src={image} alt={userName} onError={() => setImage("")} />
  ) : (
    <span>{initials}</span>
  );

  const buttonClasses = classNames(styles.avatarContainer, styles.avatarButton);
  if (onClick) {
    return (
      <RawButton customClassName={buttonClasses} data-size={size} data-radius={radius}>
        {content}
      </RawButton>
    );
  }

  return (
    <div className={styles.avatarContainer} data-size={size} data-radius={radius}>
      {content}
    </div>
  );
};
