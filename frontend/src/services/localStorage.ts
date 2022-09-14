export const retriveData = <T = any>(key: string): T | undefined => {
  const item = localStorage.getItem(key);
  const data = JSON.parse(item!) as T;

  return data ?? undefined;
};

export const persistData = (key: string, data: any): void => {
  const content = JSON.stringify(data);
  localStorage.setItem(key, content);
};

export const deleteData = (key: string): void => {
  localStorage.removeItem(key);
};
