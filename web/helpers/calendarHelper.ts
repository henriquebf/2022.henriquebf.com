import { AvailabilityRecord } from '@/models/Availability';

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
  sun = 'Sun',
  mon = 'Mon',
  tue = 'Tue',
  wed = 'Wed',
  thu = 'Thu',
  fri = 'Fri',
  sat = 'Sat',
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
  return monthNames.indexOf(name);
};

export const getWeekDay = (day: number): string => {
  return weekNames[day];
};

const workingHoursPerDay: number = 8;
const weekWorkingDays: string[] = [
  WeekNames.mon,
  WeekNames.tue,
  WeekNames.wed,
  WeekNames.thu,
];

const adjustTimezoneOffset = (targetDate: Date): Date => {
  var offset = targetDate.getTimezoneOffset();
  var Y = targetDate.getUTCFullYear();
  var M = targetDate.getUTCMonth();
  var D = targetDate.getUTCDate();
  var h = targetDate.getUTCHours();
  var m = targetDate.getUTCMinutes();
  var s = targetDate.getUTCSeconds();

  return new Date(Date.UTC(Y, M, D, h, m + offset, s));
};

export const getHours = (
  month: string,
  year: number,
  availabilities: AvailabilityRecord[] // Only used by testing suite
): number => {
  const monthNumber = getMonthDateNumber(month);

  const now = new Date();
  const nowDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 2,
    0,
    0,
    0
  );
  const monthStartDate = new Date(year, monthNumber, 2, 0, 0, 0);
  const monthEndDate = new Date(year, monthNumber + 1, 1, 0, 0, 0);

  const availability = availabilities.find(
    (a) => a.month === month && a.year === year
  );

  const unavailableDays = (
    availability?.unavailableDays ? availability.unavailableDays : ''
  ).split(',');

  let hours = 0;

  const startDate = adjustTimezoneOffset(
    nowDate.getTime() > monthStartDate.getTime() ? nowDate : monthStartDate
  );
  const endDate = adjustTimezoneOffset(monthEndDate);

  for (const d = startDate; d <= endDate; d.setUTCDate(d.getUTCDate() + 1)) {
    // console.log(
    //   month,
    //   // `startDate:${startDate} endDate:${endDate}`,
    //   `date:${d.getUTCDate()}`,
    //   `day:${d.getUTCDay()}`,
    //   `week-day:${getWeekDay(d.getUTCDay())}`
    // );
    if (
      !unavailableDays.includes('all') &&
      !unavailableDays.includes(String(d.getUTCDate())) &&
      weekWorkingDays.includes(getWeekDay(d.getUTCDay()))
    ) {
      hours += workingHoursPerDay;
    }
  }

  return hours;
};
