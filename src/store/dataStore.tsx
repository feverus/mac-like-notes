import {makeAutoObservable, observable, action, autorun} from 'mobx';
import * as I from './storeInterfaces'

export class DataStore {
    selectedId:number = 0
    filteredNotes:Array<I.Note> = []

    constructor() {
        makeAutoObservable(this, {
            selectedId: observable,
            filteredNotes: observable,
            setSelectedId: action
        })
        autorun(() => console.log('dataStore autorun'));
    }
    
    setSelectedId(id:number) {
        this.selectedId = id
    }
}

const dataStore = new DataStore()
export default dataStore