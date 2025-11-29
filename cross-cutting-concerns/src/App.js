import logo from './logo.svg';
import './App.css';
import HOCComponent from './HOC/App';
import RenderProp from './renderProps/App';

function App() {
  return (
    <div className="App">
      <HOCComponent/>
      <RenderProp/>
    </div>
  );
}

export default App;
