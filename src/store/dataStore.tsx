import {makeAutoObservable, observable, action} from 'mobx';

export class DataStore {
    selectedId:number = 0
    editedMode:boolean = false;
    filterText:string = ''

    constructor() {
        makeAutoObservable(this, {
            selectedId: observable,
            filterText: observable,
            setSelectedId: action,
            setFilterText: action,
            setEditedMode: action,
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
}

const dataStore = new DataStore()
export default dataStore