import * as uuid from 'uuid';
import { find, findOne, updateMany, deleteMany } from '@/lib/db';
import {
  WeekNames,
  getMonthDateNumber,
  getWeekDay,
} from '@/helpers/calendarHelper';

export interface AvailabilityRecord {
  id: string;
  month: string;
  year: number;
  unavailableDays: string; // '12,13,14' | 'all'
}

class Availability {
  _collection: string = 'availabilities';

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
