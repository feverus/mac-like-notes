import {makeAutoObservable, observable, action, autorun} from 'mobx';

export class DefaultStore {
    sample:string = 'sample'

    constructor() {
        makeAutoObservable(this, {
            sample: observable,
            setSample: action
        })
        autorun(() => console.log('DefaultStore autorun'));
    }
    
    setSample(newSample:string) {
        this.sample = newSample
    }
}

const defaultStore = new DefaultStore()
export default defaultStore