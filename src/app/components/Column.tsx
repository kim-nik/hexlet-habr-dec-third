"use client";

import React, { useEffect, useRef, useState } from "react";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import Task from "./Task";
import { Document } from "../../lib/features/docs/documentsSlice";

interface ColumnProps {
  status: string;
  documents: Document[];
}

const Column: React.FC<ColumnProps> = ({ status, documents }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return dropTargetForElements({
      element: el,
      getData: () => ({ status }),
      onDragEnter: () => setIsHovered(true),
      onDragLeave: () => setIsHovered(false),
      onDrop: () => setIsHovered(false),
    });
  }, [status]);

  return (
    <div
      ref={ref}
      className={`p-4 border rounded-md w-1/3 ${
        isHovered ? "bg-green-200" : "bg-white"
      }`}
    >
      <h2 className="font-bold mb-2 capitalize text-black">
        {status.replace("-", " ")}
      </h2>
      {documents
        .filter((doc) => doc.status === status)
        .map((doc) => (
          <Task key={doc.id} document={doc} />
        ))}
    </div>
  );
};

export default Column;
