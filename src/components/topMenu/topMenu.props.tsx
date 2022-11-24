import * as I from '../../store/storeInterfaces';

export type StateApi = {
    deleteDialogOpen: boolean,
}

export type ApiType = {
    createNote: () => void;
    setEditedMode: () => void;
    deleteNote: () => void;
    showDeleteDialog: (value: boolean) => void;
    filter: (text:string) => void;
};

export type UseTopMenu = () => [
    state: StateApi,
    api: ApiType
];