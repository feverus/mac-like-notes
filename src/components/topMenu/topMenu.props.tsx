import * as I from '../../store/storeInterfaces';

export type ApiType = {
    createNote: () => void;
    setEditedMode: () => void;
    deleteNote: () => void;
    filter: (text:string) => void;
};

export type UseTopMenu = () => [
    api: ApiType
];