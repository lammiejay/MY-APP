import { useState } from "react";
import './App.css';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import LinkForm from './Components/linkform/LinkForm';
import SignIn from './Components/sign-in/SignIn';
import Register from "./Components/register/register";

function App() {
  const [route, setRoute] = useState({
    signin:true,
    home: false,
    register: false
  });

// Connecting to server
  // useEffect

  const handleSignIn = () => {
    setRoute({home: false, signin: true, register: false});
  };
  
  const handleRegister = () => {
    setRoute({home: false, signin: false, register: true});
  };

  const handleHome = () => {
    setRoute({home: true, signin: false, register: false});
  };

  return (
    <div className="App">
        {route.signin && <SignIn onHome={handleHome} onRegister={handleRegister}/>}
        {route.register && 
            <Register onHome={handleHome} onSignIn={handleSignIn}/>
            }
        {route.home && [
            <> 
            <Navigation onSignIn={handleSignIn} />
            <Logo />
            <Rank />
            <LinkForm />
            </>
        ]}
      
    </div>
  );
}

export default App;
