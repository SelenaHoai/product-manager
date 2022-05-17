import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
// import Form from './components/Form';
// import Results from './components/Results'

function App() {
  return (
    <div className="App">
      <h1>Product Manager Assignment</h1>
      <div>
        <Main/>
      </div>
      <hr />
      {/* <div>
        <Results/>
      </div> */}
    </div>
  );
}

export default App;
