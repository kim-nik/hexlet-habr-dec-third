"use client";

import React, { useEffect, useState } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Column from "./Column";
import {
  initializeDocuments,
  updateDocumentStatus,
} from "../../lib/features/docs/documentsSlice";
import { RootState } from "../../lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const LOCAL_STORAGE_KEY = "kanban_documents";

const Board: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  const documents = useAppSelector(
    (state: RootState) => state.documents.documents
  );
  const dispatch = useAppDispatch();

  // Load documents from localStorage on first render
  useEffect(() => {
    const savedDocuments = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedDocuments) {
      const parsedDocuments = JSON.parse(savedDocuments);
      dispatch(initializeDocuments(parsedDocuments));
    }
    setIsInitialized(true);
  }, [dispatch]);

  // Save documents to localStorage whenever they change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(documents));
    }
  }, [documents, isInitialized]);

  // Handle drag-and-drop actions
  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) return;

        const sourceId = source.data.id as string;
        const destinationStatus = destination.data.status as
          | "in-progress"
          | "under-review"
          | "completed";

        dispatch(
          updateDocumentStatus({ id: sourceId, status: destinationStatus })
        );
      },
    });
  }, [dispatch]);
  if (!isInitialized) {
    return <div>Loading...</div>; // Show a loading state until documents are initialized
  }
  return (
    <div className="flex gap-4">
      {["in-progress", "under-review", "completed"].map((status) => (
        <Column
          key={status}
          status={status}
          documents={documents.filter((doc) => doc.status === status)}
        />
      ))}
    </div>
  );
};

export default Board;
