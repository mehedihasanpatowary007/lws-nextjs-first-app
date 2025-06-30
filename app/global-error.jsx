"use client";

import { RefreshCcw } from "lucide-react";

function GlobalErrorPage({ error, reset }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-screen">
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="bg-red-500 cursor-pointer  text-white px-4 py-2 rounded hover:bg-red-600"
      >
        <RefreshCcw />
      </button>
    </div>
  );
}

export default GlobalErrorPage;