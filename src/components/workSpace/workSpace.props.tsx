import * as I from '../../store/storeInterfaces';

export type StateType = {
    note: I.Note | undefined,
    dateToShow: string,
};

export type ApiType = {
    editNote: (field: string, value: string) => void;
};

export type UseWorkSpace = () => [
    state: StateType,
    api: ApiType
];