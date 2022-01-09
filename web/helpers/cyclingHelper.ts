export const getSchedule = (total: number, complete: number): number => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const yearKms = (total / 365) * dayOfYear;

  return Math.ceil(complete - yearKms);
};
