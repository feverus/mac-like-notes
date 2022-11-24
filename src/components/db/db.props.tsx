import * as I from '../../store/storeInterfaces';

export type StateType = {
    notes: I.Note[] | undefined;
};

export type ApiType = {
    createNote: () => void;
    editNote: (field: string, value: string) => void;
    deleteNote: () => void;
};

export type UseDb = () => [
    state: StateType,
    api: ApiType
];