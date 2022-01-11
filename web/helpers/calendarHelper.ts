export enum MonthNames {
  jan = 'Jan',
  feb = 'Feb',
  mar = 'Mar',
  apr = 'Apr',
  may = 'May',
  jun = 'Jun',
  jul = 'Jul',
  aug = 'Aug',
  sep = 'Sep',
  oct = 'Oct',
  dec = 'Dec',
}

export enum WeekNames {
  mon = 'Mon',
  tue = 'Tue',
  wed = 'Wed',
  thu = 'Thu',
  fri = 'Fri',
  sat = 'Sat',
  sun = 'Sun',
}

const monthNames: string[] = Object.values(MonthNames);
const weekNames: string[] = Object.values(WeekNames);

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

export const getMonthDateNumber = (name: string): number => {
  return monthNames.indexOf(name) + 1;
};

export const getWeekDay = (day: number): string => {
  return weekNames[day];
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
