import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import TodoApp from './components/TodoApp/TodoApp';
class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Counter /> */}
      <TodoApp/>
    </div>
   
  );
  }
}

export default App;
