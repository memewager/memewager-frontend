body {
  background: radial-gradient(#0d0d0d, #000);
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  text-align: center;
  padding: 30px;
  max-width: 500px;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.2em;
}

h1 span {
  color: #00ff88;
  text-shadow: 0 0 6px #00ff88;
}

.tagline {
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 2em;
}

.buttons button {
  background-color: #00ff88;
  color: #000;
  border: none;
  padding: 14px 26px;
  margin: 10px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.buttons button:hover {
  transform: scale(1.06);
  box-shadow: 0 0 15px #00ff88aa;
}

.status, .result {
  margin-top: 30px;
  font-size: 1.3rem;
  font-weight: 500;
  min-height: 30px;
  transition: all 0.3s;
}
