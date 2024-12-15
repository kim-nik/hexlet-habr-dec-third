"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
// import { initializeDocs } from '../lib/features/docs/documentsSlice'

export default function StoreProvider({
  // docs,
  children,
}: {
  // docs: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // storeRef.current.dispatch(initializeDocs(docs))
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
