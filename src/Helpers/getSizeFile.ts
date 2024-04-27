export const getSizeFile = (size: number | string) => {
  let newSize = Math.floor(Number(size));
  const types = [" B", " KB", " MB", " GB"];
  let currentType = 0;
  while (newSize >= 1024) {
    newSize = Math.floor(Number(newSize) / 1024);
    ++currentType;
  }
  return newSize + types[currentType];
};
