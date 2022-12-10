const isObjectEmpty = (obj: Object): boolean => {
  return Object.keys(obj).length === 0;
};

export const utils = {
  isObjectEmpty,
};
