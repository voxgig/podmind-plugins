import './App.css';
import PodW from './components/PodW';

function App() {
  return (
    <div className='main'>
      <h1>Podmind Test</h1>

      <PodW
        apikey="your-api-key"
      />
    </div>
  )
}

export default App;
