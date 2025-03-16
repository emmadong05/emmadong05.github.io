import { create } from "zustand";

enum Page {
    ABOUT,
    CONTACTS,
    PROJECTS,
    RESUME
}

type PageStore = {
    page: Page
}
const usePageStore = create<PageStore>( () => ({
    page: Page.ABOUT
}));

export {Page, usePageStore};
export type { PageStore}