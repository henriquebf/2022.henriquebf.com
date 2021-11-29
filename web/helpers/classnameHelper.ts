type Name = string | undefined;

export const classnames = (names: Name[]): string => {
  return names.filter((n) => n).join(' ');
};
