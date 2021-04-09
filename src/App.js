function App() {
  const dom = <h2>Woo!</h2>
  const input = <input type="text" onChange={() => { console.log('i am changed') }} />
  return input
}

export default App;

