import { Routes, Route } from 'react-router-dom';
import "./components/styles/App.css"
import Home from "./components/pages/Home"
import Chat from "./components/pages/Chat"
import Login from "./components/pages/Login"
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={ Home }/>
        <Route path='/chat' Component={ Chat }/>
        <Route path='/login' Component={ Login }/>
        <Route path='/signup' Component={ SignUp}/>
      </Routes>
    </div>
  );
}

export default App;
