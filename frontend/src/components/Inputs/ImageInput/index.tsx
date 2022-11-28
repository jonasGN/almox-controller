import { useRef, useState } from "react";
import { ReactFileInputElement } from "@Types/elements";
import { useOverlayElement } from "@/hooks/element";

import { AddIcon, EditIcon } from "../../Icons";
import { OptionButton } from "../../Buttons";
import { DropdownMenu } from "../../DropdownMenu";
import { Image } from "../../Image";

import styles from "./styles.module.scss";

// TODO: review this component
interface ImageInputProps extends ReactFileInputElement {
  name: string;
}

export const ImageInput = (props: ImageInputProps): JSX.Element => {
  const { name, ...rest } = props;

  const [image, setImage] = useState("");
  const { isVisible, onOpenElement } = useOverlayElement();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCatchImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    // do nothing if has no file selected
    if (!files?.length) return;

    const target = files[0];
    // do nothing if file is not an image
    if (!target.type.includes("image")) return;

    const imageUrl = URL.createObjectURL(target);
    setImage(imageUrl);

    console.log(imageUrl);
  };

  const menuItems = [
    {
      title: "Editar",
      onClick: () => {},
    },
    {
      title: "Remover",
      onClick: () => {},
      isDanger: true,
    },
  ];

  return (
    <div className={styles.image}>
      {image ? (
        <>
          <Image src={image} />

          <DropdownMenu isVisible={isVisible} items={menuItems}>
            <OptionButton icon={<EditIcon />} onClick={onOpenElement} />
          </DropdownMenu>
        </>
      ) : (
        <label className={styles.imageInput}>
          <AddIcon />
          <input
            {...rest}
            ref={inputRef}
            type="file"
            name={name}
            id={name}
            onChange={handleCatchImage}
          />
        </label>
      )}
    </div>
  );
};
