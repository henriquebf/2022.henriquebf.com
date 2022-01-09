const monthNames: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Dec',
];

type Month = {
  name: string;
  year: number;
};

export const getMonth = (
  n: number,
  inputdate?: Date // Only used by testing suite
): Month => {
  const date = inputdate || new Date();
  date.setMonth(date.getMonth() + n);
  const name = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return { name, year };
};

export const getHours = (
  name: string,
  year: number,
  settings?: string // 'Jan:64,Mar:100' -> monthName:hours
) => {
  let hours = 128;

  if (settings) {
    const setHour = settings
      .split(',')
      .filter((monthSetting) => monthSetting.startsWith(`${year}:${name}`))
      .map((monthSetting) => parseInt(monthSetting.split(':')[2]))
      .find((hour) => hour >= 0);

    if (setHour !== undefined && setHour >= 0) return setHour;
  }

  return hours;
};
