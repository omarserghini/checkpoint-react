import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
<div>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<footer>
        <p>ReactJs © 2021</p>
      </footer>
    </div>

  );
}

export default App;*/
function App() {
  return (
    <div className="App">
      <header className="header"> 
        <img src="https://www.webqam.fr/upload/content/503/image_header/1522424283.jpg" alt="" height="100px"/>
      </header>

      <main className="main">
        <div className="logo">
          <img src={logo} alt="" height="100px"/>
          <h2>With REACT.JS . <br/> Build your user interface easily and faster.</h2>
        </div>
      <form className="Formulaire">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </main>

      <footer>
        <p>Made with React.Js © 2021</p>
      </footer>
      
    </div>
  );
}

export default App;