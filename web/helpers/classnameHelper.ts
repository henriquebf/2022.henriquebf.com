type Name = string | undefined;

export const classNames = (names: Name[]): string => {
  return names.filter((n) => n).join(' ');
};
