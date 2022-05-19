import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Product Manager Assignment</h1>
      <Routes>
        <Route path='/products' element={<Main/>}/>
        <Route path='/products/:id' element={<Detail/>}/>
        <Route path='/products/update/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;


