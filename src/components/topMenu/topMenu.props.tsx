import * as I from '../../store/storeInterfaces';

export type StateApi = {
    deleteDialogOpen: boolean,
}

export type ApiType = {
    toggleSider: () => void;
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