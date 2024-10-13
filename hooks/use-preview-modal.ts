import { Book } from '@/types';
import {create } from 'zustand'

interface PreviewModalStore {
    isOpen: boolean;
    data?: Book;
    onOpen: (book: Book) => void;
    onClose: () => void;
    modal: "preview" | "building" | null;
    setModal: (modal: "preview" | "building" | null) => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (book: Book) => set({ data: book, isOpen: true }),
    onClose: () => set({ isOpen: false, data: undefined }),
    modal: null,
    setModal: (modal: "preview" | "building" | null) => set({ modal, isOpen: true }),
}))


export default usePreviewModal;