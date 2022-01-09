export const getSchedule = (
  total: number,
  complete: number,
  inputdate?: Date // Only used by testing suite
): number => {
  const now = inputdate || new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diffMs = now.getTime() - start.getTime();
  const oneDayMs = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diffMs / oneDayMs);
  const yearKms = (total / 365) * dayOfYear;

  return Math.ceil(complete - yearKms);
};
