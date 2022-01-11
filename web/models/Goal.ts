import * as uuid from 'uuid';
import { find, findOne, updateMany, deleteMany } from '@/lib/db';

export interface GoalRecord {
  id: string;
  athleteId: number;
  total: number;
  distance: number;
}

class Goal {
  _collection: string = 'goals';

  // Definitions
  _total: number = 10000000;

  // DB Transactions
  async find(filter: Partial<GoalRecord>): Promise<GoalRecord[]> {
    return find(this._collection, filter, { distance: -1 });
  }

  async findOne(filter: Partial<GoalRecord>): Promise<GoalRecord> {
    return findOne(this._collection, filter);
  }

  async save(item: Partial<GoalRecord>): Promise<GoalRecord | undefined> {
    if (!item.id) {
      item.id = uuid.v4();
    }
    if (!item.total) {
      item.total = this._total;
    }
    await updateMany(this._collection, { id: item.id }, item);
    return this.findOne({ id: item.id });
  }

  async saveAll(items: GoalRecord[]): Promise<void> {
    for (const item of items) {
      await updateMany(this._collection, { id: item.id }, item);
    }
  }

  async removeByNotIds(ids: string[]): Promise<void> {
    return deleteMany(this._collection, { id: { $nin: ids } });
  }
}

export default new Goal();
