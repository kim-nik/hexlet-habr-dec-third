"use client";

import React, { useState } from "react";
import { addDocument } from "../../lib/features/docs/documentsSlice";
import { useAppDispatch } from "@/lib/hooks";

const AddDocument: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addDocument({ title, status: "in-progress" }));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название документа"
        className="border p-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Добавить
      </button>
    </form>
  );
};

export default AddDocument;
