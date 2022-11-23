import * as I from '../../store/storeInterfaces';
import Dexie, { Table } from 'dexie';

export class DbNotes extends Dexie {
    notes!: Table<I.Note>;

    constructor() {
        super('DbNotes')
        this.version(1).stores({
            notes: '++id, date, title, body'
        })
    }
}

export const db = new DbNotes();