import {
  getMonth,
  getMonthDateNumber,
  getWeekDay,
  getHours,
} from './calendarHelper';
import { AvailabilityRecord } from '@/models/Availability';

describe('getMonth', () => {
  const testDate = new Date(2022, 0, 9);

  it('Current test month should be January', () => {
    const { name } = getMonth(0, testDate);
    expect(name).toEqual('Jan');
  });

  it('Next test month should be February', () => {
    const { name } = getMonth(1, testDate);
    expect(name).toEqual('Feb');
  });

  it('Current test year should be 2022', () => {
    const { year } = getMonth(0, testDate);
    expect(year).toEqual(2022);
  });

  it('20 months ahead should be 2023', () => {
    const { year } = getMonth(20, testDate);
    expect(year).toEqual(2023);
  });
});

describe('getMonthDateNumber', () => {
  it('get month date number', () => {
    const monthNumber = getMonthDateNumber('Feb');
    expect(monthNumber).toEqual(1);
  });
});

describe('getWeekDay', () => {
  it('get week day', () => {
    const weekDay = getWeekDay(0);
    expect(weekDay).toEqual('Sun');
  });
});

describe('getHours', () => {
  const now = new Date(2022, 0, 1, 11, 58, 33);

  const availabilities: AvailabilityRecord[] = [
    { id: 'xxx', month: 'Jan', year: 2022, unavailableDays: 'all' },
    {
      id: 'zzz',
      month: 'Apr',
      year: 2022,
      unavailableDays: '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20',
    },
  ];

  it('January should be unavailable', () => {
    const hours = getHours('Jan', 2022, availabilities, now);
    expect(hours).toEqual(0);
  });

  it('April should have 40 hours', () => {
    const hours = getHours('Apr', 2022, availabilities, now);
    expect(hours).toEqual(40);
  });

  it('A not defined month should return all working days', () => {
    const hours = getHours('May', 2022, availabilities, now);
    expect(hours).toEqual(144);
  });
});
