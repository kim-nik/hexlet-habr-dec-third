import React from "react";
import Board from "./components/Board";
import AddDocument from "./components/AddDocument";
import StoreProvider from "./StoreProvider";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Канбан-доска</h1>
      <div className="flex gap-4  mb-4">
        <a
          href="https://github.com/kim-nik"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-500"
        >
          Мой GitHub
        </a>
        <a
          href="https://career.habr.com/nik-kim-nik"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-500"
        >
          Моя Хабр Карьера
        </a>
        <a
          href="https://special.habr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-500"
        >
          Для Хабро-Хекслет Ивента
        </a>
      </div>
      <StoreProvider>
        <AddDocument />
        <Board />
      </StoreProvider>
    </div>
  );
};

export default Home;
