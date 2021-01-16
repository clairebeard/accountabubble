import logo from './logo.svg';
import './App.css';
import Bubble from "./Bubble";
import ProgressBar from "./ProgressBar";

function App() {
  let tasks = [{name:"yoga", assignee:"ash", completed:false}, {name:"legos", assignee:"claire", completed:true}];
  return (
    <div className="App">
      <ProgressBar tasks={tasks}/>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
