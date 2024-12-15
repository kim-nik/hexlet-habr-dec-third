"use client";

import React, { useEffect, useRef, useState } from "react";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { Document } from "../../lib/features/docs/documentsSlice";

interface TaskProps {
  document: Document;
}

const Task: React.FC<TaskProps> = ({ document }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return draggable({
      element: el,
      getInitialData: () => ({
        id: document.id,
        title: document.title,
        status: document.status,
      }),
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
    });
  }, [document]);

  return (
    <div
      ref={ref}
      className={`p-2 border rounded mb-2 text-black ${
        isDragging ? "bg-gray-300" : "bg-white"
      }`}
      style={isDragging ? { opacity: 0.5 } : {}}
    >
      {document.title}
    </div>
  );
};

export default Task;
