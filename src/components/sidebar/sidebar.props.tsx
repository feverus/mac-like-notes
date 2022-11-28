export type ApiType = {
    chooseNote: (id:number) => void;
};

export type UseSidebar = () => [
    api: ApiType
];