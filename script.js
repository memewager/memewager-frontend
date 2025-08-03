async function connectWallet() {
  if (window.solana && window.solana.isPhantom) {
    try {
      const resp = await window.solana.connect();
      alert("Connected: " + resp.publicKey.toString());
    } catch (err) {
      alert("Connection error.");
    }
  } else {
    alert("Install Phantom wallet!");
  }
}

function playMatch() {
  const result = Math.random() > 0.5 ? "🔥 You Won!" : "💀 You Lost!";
  document.getElementById("result").innerText = result;
}
