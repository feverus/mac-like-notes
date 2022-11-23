import * as I from '../../store/storeInterfaces';

export type StateType = {
    filteredNotes: I.Note[] | undefined
};

export type ApiType = {
    chooseNote: (id:number) => void;
};

export type UseSidebar = () => [
    state: StateType,
    api: ApiType
];