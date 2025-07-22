import { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const mockTokens = [
  {
    id: 'dino',
    name: 'Dino Token',
    ticker: 'DINO',
    deadScore: 92,
    launchDate: '2024-12-15',
    volume24h: '$45',
    chartUrl: 'https://dexscreener.com/solana/xxx123',
    reservedBy: null,
  },
  {
    id: 'fomo',
    name: 'FOMO Coin',
    ticker: 'FOMO',
    deadScore: 88,
    launchDate: '2024-11-01',
    volume24h: '$98',
    chartUrl: 'https://dexscreener.com/solana/yyy456',
    reservedBy: '8x93...abcd',
  }
];

export default function Graveyard() {
  const [tokens, setTokens] = useState(mockTokens);

  const handleReserve = (id) => {
    const updated = tokens.map(token =>
      token.id === id ? { ...token, reservedBy: 'your-wallet-address' } : token
    );
    setTokens(updated);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">DustUp Graveyard</h1>
        <WalletMultiButton />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tokens.map(token => (
          <div key={token.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{token.name} ({token.ticker})</h2>
            <p>Dead Score: {token.deadScore}/100</p>
            <p>Launched: {token.launchDate}</p>
            <p>24h Volume: {token.volume24h}</p>
            <a href={token.chartUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Chart
            </a>
            {token.reservedBy ? (
              <p className="text-red-500 mt-2">Reserved by {token.reservedBy}</p>
            ) : (
              <button
                onClick={() => handleReserve(token.id)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                CTO This Token (0.1 SOL)
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
