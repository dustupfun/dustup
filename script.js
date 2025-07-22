// Dummy tokens list
const tokens = [
  { name: "Dusty", symbol: "DUSTY", status: "Abandoned" },
  { name: "DeadToken", symbol: "DEAD", status: "Dead" },
  { name: "GhostCoin", symbol: "GHOST", status: "Forgotten" }
];

const tokenList = document.getElementById("tokenList");

// Render tokens
tokens.forEach((token) => {
  const card = document.createElement("div");
  card.className = "token-card";
  card.innerHTML = `
    <h2>${token.name} ($${token.symbol})</h2>
    <p>Status: ${token.status}</p>
    <button onclick="reserveCTO('${token.symbol}')">Reserve CTO Role</button>
  `;
  tokenList.appendChild(card);
});

// Phantom wallet connect
document.getElementById("connectWallet").addEventListener("click", async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      alert("Connected wallet: " + resp.publicKey.toString());
    } catch (err) {
      alert("Connection rejected");
    }
  } else {
    alert("Phantom wallet not found. Please install it.");
  }
});

// Simulate reserve action
function reserveCTO(symbol) {
  alert(`You have reserved CTO role for ${symbol}`);
}