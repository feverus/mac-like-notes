import * as I from '../../store/storeInterfaces';

export type ApiType = {
    createNote: () => void;
    editNote: (field: string, value: string) => void;
    deleteNote: () => void;
};

export type UseDb = () => [
    api: ApiType
];