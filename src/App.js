import logo from './logo.svg';
import './App.css';

function App() {


  let clicking = (e) =>{
    e.preventDefault()
    console.log(e);
  }

  return (
    <div>
      <form onSubmit={clicking}>
        <input type='text'/>
        <input type='submit' value="submit"/>
      </form>
    </div>
  );
}

export default App;
