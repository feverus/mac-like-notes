import {makeAutoObservable, observable, action, computed} from 'mobx'
import * as I from './storeInterfaces'

export class DataStore {
    selectedId:number = 0
    editedMode:boolean = false
    showSider:boolean = true
    filterText:string = ''
    notes:Array<I.Note> = []

    constructor() {
        makeAutoObservable(this, {
            selectedId: observable,
            filterText: observable,
            showSider: observable,
            notes: observable,
            setSelectedId: action,
            setFilterText: action,
            setEditedMode: action,
            setNotes: action,
        })
    }

    setSelectedId(id:number) {
        this.selectedId = id
    }

    setFilterText(text:string) {
        this.filterText = text
    }

    setEditedMode(on:boolean) {
        this.editedMode = on
    }

    setShowSider(on:boolean) {
        this.showSider = on
    }

    setNotes(notes:I.Note[]) {
        this.notes = notes
    }

}

const dataStore = new DataStore()
export default dataStore