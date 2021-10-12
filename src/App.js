
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Profit from './components/Profit';
import Download from './components/Download';
import Anywhere from './components/Anywhere';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router';
import Movie from './components/Movie';
function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/">

      <Home/>
</Route>
   <Route path="/profit">
      <Profit/>

      </Route>
      <Route path="/download">
      <Download />

      </Route>

      <Route path="/movie">
      <Movie />

      </Route>

      <Route path="/anywhere">
      <Anywhere />

      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
