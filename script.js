
document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      alert(`Connected to wallet: ${resp.publicKey.toString()}`);
    } catch (err) {
      console.error("Connection failed:", err);
    }
  } else {
    alert("Phantom Wallet not found. Please install it.");
  }
});
