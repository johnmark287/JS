import logo from './logo.svg';
import './App.css';
import Hello from './components/hello_world'
import Welcome from './components/welcome'
import HelloQuan from './components/hello'
import Message from './components/message'

function App() {
  return (
    <div className="App">
      {/* <Hello/>
      <Welcome/> */}
      {/* <HelloQuan/> */}
      {/* <Message/> */}
      <Hello name="John"/>
      <Hello name="Mark"/>
      <Hello name="Muhando"/>
    </div>
  );
}

export default App;
