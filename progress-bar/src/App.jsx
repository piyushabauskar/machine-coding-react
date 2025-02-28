import { ProgressBar } from './components/progressbar';
import './App.css'

function App() {
      const arr = [0, 5, 10, 20, 50, 70, 100];

  return (
      <div className="App">
        <h1>Progress Bar</h1>
        {arr.map((val, index) => (
          <ProgressBar key={index} progress={val} />
        ))}
      </div>
  )
}

export default App
