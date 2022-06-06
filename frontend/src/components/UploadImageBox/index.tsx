import React from "react";

import styles from "./styles.module.scss";

type DragEvent = React.DragEvent;

export function UploadImageBox() {
  function fileTypeValidation(fileType: string): void {
    const acceptedFileTypes = ["image/png", "image/jpeg"];

    if (acceptedFileTypes.includes(fileType)) return;
    throw Error(
      `File type: ${fileType} is not valid. The valid types are: [${acceptedFileTypes}]`
    );
  }

  function multipleFilesDragValidation(event: DragEvent): void {
    const error = Error("Multiple files dropped. Only one file can be dropped");
    const data = event.dataTransfer;

    if (data.items) {
      if (data.items.length > 1) throw error;
    } else {
      if (data.files.length > 1) throw error;
    }
  }

  function handleFile(event: DragEvent, callback: (file: File) => void) {
    const data = event.dataTransfer;
    if (data.items) {
      const file = data.items[0].getAsFile();
      callback(file!);
    } else {
      const file = data.files[0];
      callback(file);
    }
  }

  function handleOnDropFile(event: DragEvent) {
    event.preventDefault();
    multipleFilesDragValidation(event);

    handleFile(event, (file) => {
      fileTypeValidation(file.type);
      console.log("file.name = " + file.name);
      console.log("file.type = " + file.type);
    });
  }

  function handleOnDragOverFile(event: DragEvent) {
    console.log("File in drop zone");
    event.preventDefault();
  }

  return (
    <div
      className={styles.box}
      onDrop={handleOnDropFile}
      onDragOver={handleOnDragOverFile}
    >
      <img src="/images/upload-image.svg" alt="upload image box" />
      <p>
        Arraste uma imagem para este campo ou clique para adicionar uma imagem
      </p>
    </div>
  );
}
