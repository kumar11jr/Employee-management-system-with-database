import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Editinfo from "./Components/Editinfo";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Add from "./Components/Add";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Showdata from "./Components/Showdata";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
function App() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <BrowserRouter>
      <Navbar btn={userout} />
      <Switch>
        {user ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/showdata" component={Showdata} />
            <Route path="/edit/:id" component={Editinfo} />
            <Route
              exact
              path="/login"
              component={() => <Home btn={userout} />}
            />
            <Route
              exact
              path="/signup"
              component={() => <Home btn={userout} />}
            />
          </>
        ) : (
          <>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Login} />
            <Route exact path="/add" component={Login} />
            <Route exact path="/showdata" component={Login} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
