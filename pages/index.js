import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to DustUp</h1>
      <p className="mb-6">Discover and revive dead tokens on Solana</p>
      <Link href="/graveyard" className="text-blue-500 underline">
        Enter the Graveyard
      </Link>
    </main>
  );
}
