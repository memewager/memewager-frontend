body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #0e0e0e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

h1 span {
  color: #00ff88;
  text-shadow: 0 0 5px #00ff88aa;
}

.tagline {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 2rem;
}

.tier-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.tier-select button {
  background-color: #1a1a1a;
  border: 1px solid #00ff88;
  color: #00ff88;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  min-width: 120px;
  transition: 0.2s ease;
}

.tier-select button:hover {
  background-color: #00ff88;
  color: #000;
}

.buttons button {
  background-color: #00ff88;
  color: #000;
  border: none;
  padding: 14px 24px;
  margin: 10px;
  font-size: 1rem;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.buttons button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px #00ff88aa;
}

.status, .result {
  margin-top: 25px;
  font-size: 1.2rem;
  min-height: 30px;
}
