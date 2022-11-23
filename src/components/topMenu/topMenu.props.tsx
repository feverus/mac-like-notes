import * as I from '../../store/storeInterfaces';

export type ApiType = {
    createNote: () => void;
    editNote: () => void;
    deleteNote: () => void;
    filter: () => void;
};

export type UseTopMenu = () => [
    api: ApiType
];