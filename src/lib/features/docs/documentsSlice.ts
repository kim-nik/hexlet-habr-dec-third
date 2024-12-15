import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Document {
  id: string;
  title: string;
  status: "in-progress" | "under-review" | "completed";
}

interface DocumentsState {
  documents: Document[];
}

const initialState: DocumentsState = {
  documents: [
    { id: "1", title: "Документ 1", status: "in-progress" },
    { id: "2", title: "Документ 2", status: "in-progress" },
    { id: "3", title: "Документ 3", status: "under-review" },
  ],
};

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    initializeDocuments(state, action: PayloadAction<Document[]>) {
      state.documents = action.payload;
    },
    addDocument: (state, action: PayloadAction<Omit<Document, "id">>) => {
      const id = `${Date.now()}`;
      state.documents.push({ id, ...action.payload });
    },
    updateDocumentStatus: (
      state,
      action: PayloadAction<{ id: string; status: Document["status"] }>
    ) => {
      const document = state.documents.find(
        (doc) => doc.id === action.payload.id
      );
      if (document) {
        document.status = action.payload.status;
      }
    },
  },
});

export const { initializeDocuments, addDocument, updateDocumentStatus } =
  documentsSlice.actions;
export default documentsSlice.reducer;
