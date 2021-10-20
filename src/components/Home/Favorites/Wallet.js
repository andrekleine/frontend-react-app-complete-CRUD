import React from "react";

const Wallet = () => {
  return (
    <div className="wallet">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="320"
        height="190"
        fill="#BD7755"
        viewBox="0 7 16 8"
      >
        <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
        <text className="wallet-text" x="1.2" y="12" fill="#7C442A" fontSize="2px">
          Meus Favoritos
        </text>
      </svg>
    </div>
  );
};

export default Wallet;
