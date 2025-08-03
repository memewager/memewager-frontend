body {
  background: #0d0d0d;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  max-width: 400px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

h1 span {
  color: #00ff88;
}

.buttons button {
  background-color: #00ff88;
  color: #000;
  border: none;
  padding: 14px 24px;
  margin: 10px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.buttons button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px #00ff88aa;
}

.result, .status {
  margin-top: 30px;
  font-size: 1.2rem;
}
