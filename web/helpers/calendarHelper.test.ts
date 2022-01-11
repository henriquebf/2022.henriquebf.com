import {
  getMonth,
  getMonthDateNumber,
  getWeekDay,
  getHours,
} from './calendarHelper';

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
    expect(monthNumber).toEqual(2);
  });
});

describe('getWeekDay', () => {
  it('get week day', () => {
    const weekDay = getWeekDay(0);
    expect(weekDay).toEqual('Mon');
  });
});

describe('getHours', () => {
  const settings = '2022:Jan:0,2022:Feb:0,2022:Mar:0,2022:Apr:32,2022:May:72';

  it('January should be unavailable', () => {
    const hours = getHours('Jan', 2022, settings);
    expect(hours).toEqual(0);
  });

  it('April should have 32 hours', () => {
    const hours = getHours('Apr', 2022, settings);
    expect(hours).toEqual(32);
  });

  it('A not defined month should return 128', () => {
    const hours = getHours('Jul', 2023, settings);
    expect(hours).toEqual(128);
  });

  it('Settings not defined month should return 128', () => {
    const hours = getHours('Mar', 2022);
    expect(hours).toEqual(128);
  });
});
