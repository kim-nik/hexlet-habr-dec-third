import React from "react";
import Board from "./components/Board";
import AddDocument from "./components/AddDocument";
import StoreProvider from "./StoreProvider";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Канбан-доска</h1>
      <StoreProvider>
        <AddDocument />
        <Board />
      </StoreProvider>
    </div>
  );
};

export default Home;
