
import './App.css';
import EventInputClass from './Components/EventInputClass';
import EventInput from './Components/EventInput';
import RefClassSample from './Components/RefClassSample';
import RefInput from './Components/Refinput';

function App() {
  return (
    <div className="App">
      <h2>EventInput</h2>
      <EventInputClass></EventInputClass>
      <EventInput></EventInput>
      <h2>RefClassSample</h2>
      <RefClassSample></RefClassSample>
      <h2>RefInput</h2>
      <RefInput></RefInput>
    </div>
  );
}

export default App;
