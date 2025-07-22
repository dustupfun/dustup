window.addEventListener("load", () => {
  const connectWalletButton = document.getElementById("connectWallet");

  connectWalletButton.addEventListener("click", async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const resp = await window.solana.connect();
        alert(`Connected wallet: ${resp.publicKey.toString()}`);
        connectWalletButton.innerText = "Connected";
        connectWalletButton.disabled = true;
      } catch (err) {
        alert("Connection failed: " + err.message);
      }
    } else {
      alert("Phantom Wallet not found. Please install it.");
      window.open("https://phantom.app", "_blank");
    }
  });

  // Mock token list
  const tokens = [
    { name: "ZOMBIE", desc: "Left for dead... or is it?", supply: "1M" },
    { name: "REKT", desc: "Holders gone. Will you revive it?", supply: "2M" },
    { name: "DUSTY", desc: "Scattered, forgotten, ready to rise.", supply: "500k" },
  ];

  const tokenList = document.getElementById("tokenList");
  tokens.forEach(token => {
    const el = document.createElement("div");
    el.className = "token-card";
    el.innerHTML = `
      <h3>${token.name}</h3>
      <p>${token.desc}</p>
      <small>Supply: ${token.supply}</small>
    `;
    tokenList.appendChild(el);
  });
});
