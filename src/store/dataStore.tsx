import {makeAutoObservable, observable, action} from 'mobx';
import * as I from './storeInterfaces'

export class DataStore {
    selectedId:number = 0
    filterText:string = ''

    constructor() {
        makeAutoObservable(this, {
            selectedId: observable,
            filterText: observable,
            setSelectedId: action,
            setFilterText: action,
        })
    }
    
    setSelectedId(id:number) {
        this.selectedId = id
    }

    setFilterText(text:string) {
        this.filterText = text
    }
}

const dataStore = new DataStore()
export default dataStore