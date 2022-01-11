import * as uuid from 'uuid';
import { find, findOne, updateMany, deleteMany } from '@/lib/db';
import {
  WeekNames,
  getMonthDateNumber,
  getWeekDay,
} from '@/helpers/calendarHelper';

export interface AvailabilityRecord {
  id: string;
  userEmail: string;
  month: string;
  year: number;
  unavailableDays: string; // '12,13,14' | 'all'
}

class Availability {
  _collection: string = 'availabilities';

  // Definitions
  _weekWorkingDays: string[] = [
    WeekNames.mon,
    WeekNames.tue,
    WeekNames.wed,
    WeekNames.thu,
  ];
  _workingHoursPerDay: number = 8;

  // Calculations
  async calculateAvailableHoursByMonth(
    month: string,
    year: number,
    inputAvailability?: AvailabilityRecord // Only used by testing suite
  ): Promise<number> {
    const monthNumber = getMonthDateNumber(month);
    const startDate = new Date(year, monthNumber, 1);
    const endDate = new Date(year, monthNumber + 1, 0);

    const availability =
      inputAvailability || (await this.findOne({ month, year }));
    const unavailableDays = (
      availability?.unavailableDays ? availability.unavailableDays : ''
    ).split(',');

    let hours = 0;
    for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      if (
        !unavailableDays.includes('all') &&
        !unavailableDays.includes(String(d.getDate)) &&
        !this._weekWorkingDays.includes(getWeekDay(d.getDay()))
      ) {
        hours += this._workingHoursPerDay;
      }
    }

    return hours;
  }

  // DB Transactions
  async find(
    filter: Partial<AvailabilityRecord>
  ): Promise<AvailabilityRecord[]> {
    return find(this._collection, filter, { distance: -1 });
  }

  async findOne(
    filter: Partial<AvailabilityRecord>
  ): Promise<AvailabilityRecord> {
    return findOne(this._collection, filter);
  }

  async save(
    item: Partial<AvailabilityRecord>
  ): Promise<AvailabilityRecord | undefined> {
    if (!item.id) {
      item.id = uuid.v4();
    }
    await updateMany(this._collection, { id: item.id }, item);
    return this.findOne({ id: item.id });
  }

  async saveAll(items: AvailabilityRecord[]): Promise<void> {
    for (const item of items) {
      await updateMany(this._collection, { id: item.id }, item);
    }
  }

  async removeByNotIds(ids: string[]): Promise<void> {
    return deleteMany(this._collection, { id: { $nin: ids } });
  }
}

export default new Availability();
